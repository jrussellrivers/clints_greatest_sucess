fetch('/animals')
.then(resp=>resp.json())
.then(json=>json.forEach(elem => createAnimal(elem)))

function createAnimal(elem){
    let animalList = document.getElementById('animals')
    let newAnimal = document.createElement('li')

    newAnimal.innerText = elem.name

    let animalName = document.getElementById('name')
    let animalTraits = document.getElementById('attributes')

    newAnimal.addEventListener('click', ()=>{
        animalName.innerText = elem.name
        animalTraits.innerHTML = `
        <li>Age: ${elem.age}</li>
        <li>Color: ${elem.color}</li>
        <li>Type: ${elem.type}</li>`
    })

    animalList.append(newAnimal)
}