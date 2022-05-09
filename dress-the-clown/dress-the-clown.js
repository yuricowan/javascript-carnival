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
let bodyIndex = 4
let bodyPart = [`body`, `head`, `shoes`]
let bodyPartHtmlId = [body, head, shoes]
let bodyPartIndex = 0
let e = ''

// -- Telling the user of the body part and clothing selected -- //
let bodyPartSelected = document.getElementById(`bodyPartSelected`)
let headClothingSelected = document.getElementById(`headClothingSelected`)
let bodyClothingSelected = document.getElementById(`bodyClothingSelected`)
let shoeClothingSelected = document.getElementById(`shoeClothingSelected`)

// -- Array of clothing names -- //
bodyClothes = [
  `naked`,
  `EDA coding masta`,
  `super star`,
  `big love`,
  `hoodie lord`,
  `angel`,
]
headClothes = [
  `bald boi`,
  `TOP OF THE MORNIN' TO YA`,
  `purple cappy`,
  `ITS JUST A PHASE`,
  `prickly`,
  `halo`,
]
shoeClothes = [
  `bare feet`,
  `loafers`,
  `skrrt skrrt`,
  `hobbit feet`,
  `Niky shoes`,
  `slip sloppers`,
]

let bodyClothesIndex = 4
let headClothesIndex = 3
let shoeClothesIndex = 4

function displayWardrobeHtml() {
  switch (bodyPartIndex) {
    case 0:
      bodyClothesIndex = bodyIndex
      break
    case 1:
      headClothesIndex = bodyIndex
      break
    case 2:
      shoeClothesIndex = bodyIndex
      break
  }

  bodyClothingSelected.innerHTML = `Body clothing: ${bodyClothes[bodyClothesIndex]}`
  headClothingSelected.innerHTML = `Head clothing: ${headClothes[headClothesIndex]}`
  shoeClothingSelected.innerHTML = `Shoe clothing: ${shoeClothes[shoeClothesIndex]}`
}

bodyPartHtml = () => {
  bodyPartSelected.innerHTML = `Body part: ${bodyPart[bodyPartIndex]}`
}

displayWardrobeHtml()
bodyPartHtml()

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
  displayWardrobeHtml()
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
  displayWardrobeHtml()
}

function changeBodyPartUp() {
  if (bodyPartIndex < 2) {
    bodyPartIndex++

    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  } else if (bodyPartIndex == 2) {
    bodyPartIndex = 0

    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  }
  bodyPartHtml()
}
function changeBodyPartDown() {
  if (bodyPartIndex > 0) {
    bodyPartIndex--

    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  } else if (bodyPartIndex == 0) {
    bodyPartIndex = 2

    console.log(`BodyPartIndex = ${bodyPartIndex}`)
  }
  bodyPartHtml()
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
