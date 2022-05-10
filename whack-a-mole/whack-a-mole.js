// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('TD')
let imageElement = document.createElement('img')
let whackSound = new Audio(`noot-noot.mp3`)
imageElement.src = 'mole.png'
imageElement.className = 'moleSize'

// -- Random number generator -- //
let max = cells.length
let randomNumber = 0
getRandomInt = (max) => (randomNumber = Math.floor(Math.random() * max))

placeMole = () => {
  cells[randomNumber].appendChild(imageElement)
}

removeMole = () => {
  cells[randomNumber].removeChild(imageElement)
}

for (i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  if (cells[randomNumber].contains(e.target) == true) {
    whackAMoleSound()
    removeMole()
    getRandomInt(max)
    placeMole()
  }
}

whackAMoleSound = () => {
  whackSound.play()
}

// -- ON START -- //
getRandomInt(max)
placeMole()
