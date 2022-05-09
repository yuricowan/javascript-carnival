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
let bodyPartHtmlId = [body, head, shoes]
let bodyPartIndex = 1
let e = ''

function changeClothesLeft() {
  if (bodyIndex < 5) {
    bodyIndex++
    bodyPartHtmlId[
      bodyPartIndex
    ].src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(`BodyIndex = ${bodyIndex}`)
  } else if (bodyIndex == 5) {
    bodyIndex = 0
    bodyPartHtmlId[
      bodyPartIndex
    ].src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(`BodyIndex = ${bodyIndex}`)
  }
}

function changeClothesRight() {
  if (bodyIndex > 0) {
    bodyIndex--
    bodyPartHtmlId[
      bodyPartIndex
    ].src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(`BodyIndex = ${bodyIndex}`)
  } else if (bodyIndex == 0) {
    bodyIndex = 5
    bodyPartHtmlId[
      bodyPartIndex
    ].src = `images/${bodyPart[bodyPartIndex]}${bodyIndex}.png`
    console.log(`BodyIndex = ${bodyIndex}`)
  }
}

function changeBodyPartUp() {
  if (bodyPartIndex < 2) {
    bodyPartIndex++
    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  } else if (bodyPartIndex == 2) {
    bodyPartIndex = 0
    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  }
}
function changeBodyPartDown() {
  if (bodyPartIndex > 0) {
    bodyPartIndex--
    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  } else if (bodyPartIndex == 0) {
    bodyPartIndex = 2
    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  }
}

// This function identifies arrow key actions based on the keycode output
document.onkeydown = (e) => {
  e = e || window.event
  switch (e.keyCode) {
    // LEFT
    case 37:
      changeClothesLeft()
      break
    // UP
    case 38:
      changeBodyPartUp()
      break
    // RIGHT
    case 39:
      changeClothesRight()
      break
    // DOWN
    case 40:
      changeBodyPartDown()
      break
  }
}

// up arrow increases bodypartindex
// left/right arrow changes two different body
