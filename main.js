const btn = document.getElementById("btn")
const champ = document.getElementById("champs"
 )
 const id = document.getElementById("id")
const text = document.getElementById("ou")
const vide = document.getElementById("clear")
const output = document.getElementById("output")
const img = document.createElement("img")


btn.addEventListener("click", () => {
  fetch('https://api.github.com/users/' + champ.value)
  .then(reponse => reponse.json()
  .then(data => {
    ou.textContent = '';
     ou.textContent = `le compte github de ${data.name}`;
     id.textContent = `sont id c'est ${data.id}`;
     
    img.src = data.avatar_url;
    output.appendChild(img);
    
  })
  )
})
