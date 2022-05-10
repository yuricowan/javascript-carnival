// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('TD')
let mole = `<img src="mole.png">`

// -- Random number generator -- //

let max = cells.length
let randomNumber = 0
getRandomInt = (max) => (randomNumber = Math.floor(Math.random() * (max + 1)))

for (i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target

  getRandomInt(max)
  console.log(randomNumber)
  cell.innerhtml = mole
}
