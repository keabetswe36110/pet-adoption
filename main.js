const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
const pets = await petPromise.json()
 console.log(pets);

 const template = document.querySelector("#duplicate");
 const allNewDivs = document.createElement("div");

 pets.forEach(pet =>{
    const clone = template.content.cloneNode(true)

    clone.querySelector("h3").textContent = pet.name;

    clone.querySelector(".description").textContent = pet.description;

    const img = clone.querySelector('img')
    img.src = pet.photo;
    img.alt = `a ${pet.species} named ${pet.name}`

    clone.querySelector(".primary-btn").href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/` 

    clone.querySelector("#hello").textContent = `Adopt ${pet.name}` 

    const age = new Date().getFullYear() - pet.birthYear
    
    if (age > 1) {
        clone.querySelector('.age').textContent = `${age} years old`
    } else {
        if (age == 1) {
            clone.querySelector('.age').textContent = `${age} year old`
        } else {
            clone.querySelector('.age').textContent = `less than a year old`
        }
        
    }

    clone.querySelector(".species").textContent = pet.species


    allNewDivs.appendChild(clone);
 })
 document.querySelector(".animals").appendChild(allNewDivs)

 const filterButtons = document.querySelectorAll(".filter-nav a")
 filterButtons.forEach(el => {
    el.addEventListener('click', e => handleFilterClick(e))
 })

 function handleFilterClick(e){
    let target = e.target

    if (e.target.classList.contains("only-large-screen")) {
        target = e.target.closeset("a");
    }

    e.preventDefault()
    filterButtons.forEach(el => {
        el.classList.remove("active")
    })
    target.classList.add("active")

    filterPets(target.dataset.filter)
 }
 function filterPets(species){
    const allPets = document.querySelectorAll('.animal-card')
    if (species == "all") {
        allPets.forEach(el =>{
            el.style.display = ""
        })
    } else {
        allPets.forEach(el => {
            if (el.querySelector(".species").textContent == species) {
                el.style.display = ""
            } else {
                el.style.display = "none"
            }
        })
        
    }
 }