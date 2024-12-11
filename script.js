//Generate preFix of name
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate First Name of name
function genfirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Arcadia'
    } else if (firstLetter === 'b') {
        return 'Bianca'
    } else if (firstLetter === 'c') {
        return 'Circe'
    } else if (firstLetter === 'd') {
        return 'Dorcas'
    } else if (firstLetter === 'e') {
        return 'Eurydice'
    } else if (firstLetter === 'f') {
        return 'Farah'
    } else {
        return 'Niki' //default if first letter doesn't match
    }

}

//Generate Middle Name
function genMiddleName(roadType, favColor) {
    if (roadType === 'road') {
        return `${favColor}grove`
    } else if (roadType === 'street') {
        return `${favColor}field`
    } else if (roadType === 'ave') {
        return `${favColor}ridge`
    } else if (roadType === 'court') {
        return `${favColor}stream`
    } else {
        return `${favColor}stone`
    }
}

//Generate Last Name
function genLastName(lastName) {
    const firstLetter = lastName.charAt(0).toUpperCase()
    if (firstLetter === 'A') {
        return 'Avery'
    } else if (firstLetter === 'B') {
        return 'Black'
    } else if (firstLetter === 'C') {
        return 'Carrow'
    } else if (firstLetter === 'D') {
        return 'Darkwood'
    } else if (firstLetter === 'E') {
        return 'Emerey'
    } else if (firstLetter === 'F') {
        return 'Fey'
    } else if (firstLetter === 'G') {
        return 'Gaunt'
    } else {
        return 'Lore' //default if first letter doesn't match
    }

}

//Generate Suffix
function genSuffix(favAnimal) {
    return `of the ${favAnimal} House`
}

// Master Function to Assemble Full Name
function genFullName() {
    //Define Variables from Inputs
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favColor = document.getElementById('favColor').value.trim()
    const favAnimal = document.getElementById('favAnimal').value.trim()


    // Generate each part of name using Helper function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstname)
    const middleName = genMiddleName(roadType, favColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favAnimal)


}