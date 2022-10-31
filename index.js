
let animals = ["cat", "dog", "elephant", "horse", "lion", "monkey", "parrot", "sheep", "tiger", "wolf"]

console.log(animals.length)


let mainContainer = document.querySelector(".animals_container")


animals.forEach( elem => {
 let animal =  document.createElement("img");
 animal.setAttribute("src", `images/${elem}.jpg`)
 animal.setAttribute("class", `animal`)
 animal.setAttribute("alt", `${elem}`)
 return mainContainer.insertBefore(animal, null)
}
)


 let allAnimals = document.querySelectorAll(".animal")

 for(let i = 0; i < allAnimals.length; i++){
     
    allAnimals[i].addEventListener("click",  function(){
        let animalName = this.getAttribute("alt")
        let sound = new Audio(`sounds/${animalName}.mp3`)
        sound.play();
    })
 }

