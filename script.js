//Generate preFix of name
let genderType;
function genPrefix(firstName) {
    if (firstName.length > 4) {
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

//Generate First Name of name
function genFirstName(firstName, genderType) {
    console.log(firstName)
    console.log(genderType)
    const firstLetter = firstName.charAt(0).toLowerCase()
    console.log(firstLetter)


    if (firstLetter === 'a' && genderType === 'female') {
        return 'Arcadia'
    } else if (firstLetter === 'b' && genderType === 'female') {
        return 'Bianca'
    } else if (firstLetter === 'c' && genderType === 'female') {
        return 'Circe'
    } else if (firstLetter === 'd' && genderType === 'female') {
        return 'Dorcas'
    } else if (firstLetter === 'e' && genderType === 'female') {
        return 'Eurydice'
    } else if (firstLetter === 'f' && genderType === 'female') {
        return 'Farah'
    } else if (firstLetter === 'g' && genderType === 'female') {
        return 'Guinevere'
    } else if (firstLetter === 'h' && genderType === 'female') {
        return 'Helena'
    } else if (firstLetter === 'i' && genderType === 'female') {
        return 'Iris'
    } else if (firstLetter === 'j' && genderType === 'female') {
        return 'Juno'
    } else if (firstLetter === 'k' && genderType === 'female') {
        return 'Kore'
    } else if (firstLetter === 'l' && genderType === 'female') {
        return 'Lavina'
    } else if (firstLetter === 'm' && genderType === 'female') {
        return 'Medea'
    } else if (firstLetter === 'n' && genderType === 'female') {
        return 'Nikita'
    } else if (firstLetter === 'o' && genderType === 'female') {
        return 'Ophelia'
    } else if (firstLetter === 'p' && genderType === 'female') {
        return 'Pallas'
    } else if (firstLetter === 'q' && genderType === 'female') {
        return 'Quartz'
    } else if (firstLetter === 'r' && genderType === 'female') {
        return 'Rowena'
    } else if (firstLetter === 's' && genderType === 'female') {
        return 'Silena'
    } else if (firstLetter === 't' && genderType === 'female') {
        return 'Thalia'
    } else if (firstLetter === 'u' && genderType === 'female') {
        return 'Uma'
    } else if (firstLetter === 'v' && genderType === 'female') {
        return 'Valorie'
    } else if (firstLetter === 'w' && genderType === 'female') {
        return 'Willow'
    } else if (firstLetter === 'x' && genderType === 'female') {
        return 'Xena'
    } else if (firstLetter === 'y' && genderType === 'female') {
        return 'Yelena'
    } else if (firstLetter === 'z' && genderType === 'female') {
        return 'Zoe'
    } else if (firstLetter === 'a' && genderType === 'male') {
        return 'Alexander'
    } else if (firstLetter === 'b' && genderType === 'male') {
        return 'Blaise'
    } else if (firstLetter === 'c' && genderType === 'male') {
        return 'Carter'
    } else if (firstLetter === 'd' && genderType === 'male') {
        return 'Drake'
    } else if (firstLetter === 'e' && genderType === 'male') {
        return 'Ethan'
    } else if (firstLetter === 'f' && genderType === 'male') {
        return 'Festus'
    } else if (firstLetter === 'g' && genderType === 'male') {
        return 'Godric'
    } else if (firstLetter === 'h' && genderType === 'male') {
        return 'Hector'
    } else if (firstLetter === 'i' && genderType === 'male') {
        return 'Icarus'
    } else if (firstLetter === 'j' && genderType === 'male') {
        return 'James'
    } else if (firstLetter === 'k' && genderType === 'male') {
        return 'Kastor'
    } else if (firstLetter === 'l' && genderType === 'male') {
        return 'Lucas'
    } else if (firstLetter === 'm' && genderType === 'male') {
        return 'Merlin'
    } else if (firstLetter === 'n' && genderType === 'male') {
        return 'Nicholas'
    } else if (firstLetter === 'o' && genderType === 'male') {
        return 'Orion'
    } else if (firstLetter === 'p' && genderType === 'male') {
        return 'Percival'
    } else if (firstLetter === 'q' && genderType === 'male') {
        return 'Quinton'
    } else if (firstLetter === 'r' && genderType === 'male') {
        return 'Remus'
    } else if (firstLetter === 's' && genderType === 'male') {
        return 'Sirius'
    } else if (firstLetter === 't' && genderType === 'male') {
        return 'Theseus'
    } else if (firstLetter === 'u' && genderType === 'male') {
        return 'Ulysses'
    } else if (firstLetter === 'v' && genderType === 'male') {
        return 'Victor'
    } else if (firstLetter === 'w' && genderType === 'male') {
        return 'Walter'
    } else if (firstLetter === 'x' && genderType === 'male') {
        return 'Xander'
    } else if (firstLetter === 'y' && genderType === 'male') {
        return 'Yarrow'
    } else if (firstLetter === 'z' && genderType === 'male') {
        return 'Zachary'
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
        return 'Feykeep'
    } else if (firstLetter === 'G') {
        return 'Gaunt'
    } else if (firstLetter === 'H') {
        return 'Heartgrove'
    } else if (firstLetter === 'I') {
        return 'Ironroot'
    } else if (firstLetter === 'J') {
        return 'Jameson'
    } else if (firstLetter === 'K') {
        return 'Kindlewood'
    } else if (firstLetter === 'L') {
        return 'Lightbook'
    } else if (firstLetter === 'M') {
        return 'Mythos'
    } else if (firstLetter === 'N') {
        return 'Nott'
    } else if (firstLetter === 'O') {
        return 'Obelin'
    } else if (firstLetter === 'P') {
        return 'Pyre'
    } else if (firstLetter === 'Q') {
        return 'Quicksilver'
    } else if (firstLetter === 'R') {
        return 'Riddle'
    } else if (firstLetter === 'S') {
        return 'Stonehearth'
    } else if (firstLetter === 'T') {
        return 'Tolkien'
    } else if (firstLetter === 'U') {
        return 'Undergrove'
    } else if (firstLetter === 'V') {
        return 'Vale'
    } else if (firstLetter === 'W') {
        return 'Windborne'
    } else if (firstLetter === 'X') {
        return 'Xolondra'
    } else if (firstLetter === 'Y') {
        return 'Young'
    } else if (firstLetter === 'Z') {
        return 'Zephyrwing'
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
    genderType = document.getElementById('genType').value


    // Generate each part of name using Helper function
    const prefix = genPrefix(firstName)

    const newFirstName = genFirstName(firstName, genderType); // Pass genderType

    const middleName = genMiddleName(roadType, favColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favAnimal)

    //function to capitalize words
    const capitalizedPrefix = toCapitalize(prefix)
    const capitalizedFirstName = toCapitalize(newFirstName)
    const capitalizedMiddleName = toCapitalize(middleName)
    const capitalizedLastName = toCapitalize(newLastName)
    const capitalizedSuffix = toCapitalize(suffix)

    //combine all parts into name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${capitalizedSuffix}`

    //display result
    document.getElementById('result').textContent = fullName

}


//Capitalizer Function

function toCapitalize(word) {
    console.log(word)
    return word.toString().charAt(0).toUpperCase() + word.slice(1).toLowerCase()

}