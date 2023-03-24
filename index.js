
let animals = ["cat", "dog", "elephant", "horse", "lion", "monkey", "parrot", "sheep", "wolf", "pig",
                 "dinosaur", "chicken", "duck", "whale", "owl"]

console.log(animals.length)


let mainContainer = document.querySelector(".animals_container")

let title = document.querySelector("h1")


animals.forEach( elem => {
 let animal =  document.createElement("img");
 animal.setAttribute("src", `images/${elem}.jpg`)
 animal.setAttribute("class", `animal`)
 animal.setAttribute("alt", `${elem}`)
 animal.style.width = "260px"
 animal.style.margin = "5px"
 animal.style.borderRadius = "20px"

 
 
 return mainContainer.insertBefore(animal, null)
}
)

mainContainer.style.display = "flex"
mainContainer.style.flexWrap = "wrap"
mainContainer.style.justifyContent = "center"

function addAnimation(elem){

    elem.classList.add("mouseover")
}

function removeAnimation(elem){

    elem.classList.remove("mouseover")
}
 let allAnimals = document.querySelectorAll(".animal")

 for(let i = 0; i < allAnimals.length; i++){

    allAnimals[i].addEventListener("mouseenter",  function(){
        addAnimation(this)
    })

    allAnimals[i].addEventListener("mouseleave",  function(){
        removeAnimation(this)
    })


     
    allAnimals[i].addEventListener("click",  function(){
        let animalName = this.getAttribute("alt")
        let sound = new Audio(`sounds/${animalName}.mp3`)
     
        sound.play();
    })
 }

