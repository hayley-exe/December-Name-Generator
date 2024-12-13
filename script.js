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
function genFirstName(firstName, genderType) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a' && genderType === 'Female') {
        return 'Arcadia'

    }
    if (firstLetter === 'a' && genderType === 'Male') {
        return 'Alexander'
    }
    else if (firstLetter === 'b' && genderType === 'Female') {
        return 'Bianca'
    } else if (firstLetter === 'c' && genderType === 'Female') {
        return 'Circe'
    } else if (firstLetter === 'd' && genderType === 'Female') {
        return 'Dorcas'
    } else if (firstLetter === 'e' && genderType === 'Female') {
        return 'Eurydice'
    } else if (firstLetter === 'f' && genderType === 'Female') {
        return 'Farah'
    } else if (firstLetter === 'g' && genderType === 'Female') {
        return 'Guinevere'
    } else if (firstLetter === 'h' && genderType === 'Female') {
        return 'Helena'
    } else if (firstLetter === 'i' && genderType === 'Female') {
        return 'Iris'
    } else if (firstLetter === 'j' && genderType === 'Female') {
        return 'Juno'
    } else if (firstLetter === 'k' && genderType === 'Female') {
        return 'Kore'
    } else if (firstLetter === 'l' && genderType === 'Female') {
        return 'Lavina'
    } else if (firstLetter === 'm' && genderType === 'Female') {
        return 'Medea'
    } else if (firstLetter === 'n' && genderType === 'Female') {
        return 'Nikita'
    } else if (firstLetter === 'o' && genderType === 'Female') {
        return 'Ophelia'
    } else if (firstLetter === 'p' && genderType === 'Female') {
        return 'Pallas'
    } else if (firstLetter === 'q' && genderType === 'Female') {
        return 'Quartz'
    } else if (firstLetter === 'r' && genderType === 'Female') {
        return 'Rowena'
    } else if (firstLetter === 's' && genderType === 'Female') {
        return 'Silena'
    } else if (firstLetter === 't' && genderType === 'Female') {
        return 'Thalia'
    } else if (firstLetter === 'u' && genderType === 'Female') {
        return 'Uma'
    } else if (firstLetter === 'v' && genderType === 'Female') {
        return 'Valorie'
    } else if (firstLetter === 'w' && genderType === 'Female') {
        return 'Willow'
    } else if (firstLetter === 'x' && genderType === 'Female') {
        return 'Xena'
    } else if (firstLetter === 'y' && genderType === 'Female') {
        return 'Yarrow'
    } else if (firstLetter === 'z' && genderType === 'Female') {
        return 'Zoe'
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
        return 'Yarrow'
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
    const genderType = document.getElementById('genType').value


    // Generate each part of name using Helper function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
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
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

}