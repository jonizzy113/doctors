// lighting exercise 1

// const createDoctor = (name, specialty, address) => {
//     return {
//         "name": name,
//         "specialty": specialty,
//         "address": address
//     }
// }
// const john = createDoctor("JOHN","pediatrician","123 lake court")
// console.log(john)

// lighting excersice 2 
let bowWowKennels = []
const createPet = (name, breed) => {
    return{
        "Name": name,
        "Breed": breed
    }
}

bowWowKennels.push(createPet("Jade", "Mix"))
bowWowKennels.push(createPet("Drizzle", "Beagle"))
bowWowKennels.push(createPet("Bella", "Lab"))

console.log(bowWowKennels)