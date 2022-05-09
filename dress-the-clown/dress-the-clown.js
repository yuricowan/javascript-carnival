// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// We are going to write some `JavaScript functions` and bind them to the arrow keys on your keyboard. The *up and down arrow keys* will move between different parts of the clown, and the *left and right* arrow keys will cycle between different clothing options

// -- HTML elements of clown -- //
let head = document.getElementById(`head`)
let body = document.getElementById(`body`)
let shoes = document.getElementById(`shoes`)

// -- Declare body part indexes to cycle through clothes -- //
let bodyIndex = 0
let bodyPart = [`body`, `head`, `shoes`]
let bodyPartIndex = 1
let e = ''

function changeClothesLeft() {
  if (bodyIndex < 5) {
    bodyIndex++
    head.src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(bodyIndex)
  } else if (bodyIndex == 5) {
    bodyIndex = 0
    head.src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(bodyIndex)
  }
}

function changeClothesRight() {
  if (bodyIndex > 0) {
    bodyIndex--
    head.src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(bodyIndex)
  } else if (bodyIndex == 0) {
    bodyIndex = 5
    head.src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(bodyIndex)
  }
}

function changeBodyPartUp() {
  if (bodyPartIndex < 2) {
    bodyPartIndex++
    console.log(bodyPartIndex)
  } else if (bodyPartIndex == 2) {
    bodyPartIndex = 0
    console.log(bodyPartIndex)
  }
}
function changeBodyPartDown() {
  if (bodyPartIndex > 0) {
    bodyPartIndex--
    console.log(bodyPartIndex)
  } else if (bodyPartIndex == 0) {
    bodyPartIndex = 2
    console.log(bodyPartIndex)
  }
}

document.onkeydown = (e) => {
  e = e || window.event
  switch (e.keyCode) {
    case 37:
      changeClothesLeft()
      console.log('left')
      break
    case 38:
      changeBodyPartUp()
      console.log('up')
      break
    case 39:
      changeClothesRight()
      console.log('right')
      break
    case 40:
      changeBodyPartDown()
      console.log('down')
      break
  }
}

// create a loop where once you reach the maximum index it cycles back to zero
// conditional if()
// else if()
