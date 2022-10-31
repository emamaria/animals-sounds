
let animals = ["cat", "dog", "elephant", "horse", "lion", "monkey", "parrot", "sheep", "tiger", "wolf"]

console.log(animals.length)


let mainContainer = document.querySelector(".animals_container")

let title = document.querySelector("h1")


animals.forEach( elem => {
 let animal =  document.createElement("img");
 animal.setAttribute("src", `images/${elem}.jpg`)
 animal.setAttribute("class", `animal`)
 animal.setAttribute("alt", `${elem}`)
 animal.style.width = "300px"
 animal.style.margin = "5px"

 
 
 return mainContainer.insertBefore(animal, null)
}
)

mainContainer.style.display = "flex"
mainContainer.style.flexWrap = "wrap"
mainContainer.style.justifyContent = "center"

 let allAnimals = document.querySelectorAll(".animal")

 for(let i = 0; i < allAnimals.length; i++){
     
    allAnimals[i].addEventListener("click",  function(){
        let animalName = this.getAttribute("alt")
        let sound = new Audio(`sounds/${animalName}.mp3`)
        sound.play();
    })
 }

