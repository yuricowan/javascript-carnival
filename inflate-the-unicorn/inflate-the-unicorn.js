// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')
let images = document.getElementsByTagName('img')
let unicorn0 = document.getElementById('unicorn0')
let unicorn1 = document.getElementById('unicorn1')
let unicorn2 = document.getElementById('unicorn2')
let myUnicorns = [unicorn0, unicorn1, unicorn2]

let unicorn0Index = 0
let unicorn1Index = 0
let unicorn2Index = 0
let horseNoise = new Audio(`horse-sound.mp3`)

for (i = 0; i < images.length; i++) {
  images[i].onclick = unicornClicked
}

function unicornClicked(e) {
  if (e.target == unicorn0 && unicorn0Index < 3) {
    unicorn0Index++
    inflateUnicornHorn(unicorn0Index, myUnicorns[0])
    isMyBalloonFull(unicorn0Index)
  } else if (e.target == unicorn1 && unicorn1Index < 3) {
    unicorn1Index++
    inflateUnicornHorn(unicorn1Index, myUnicorns[1])
    isMyBalloonFull(unicorn1Index)
  } else if (e.target == unicorn2 && unicorn2Index < 3) {
    unicorn2Index++
    inflateUnicornHorn(unicorn2Index, myUnicorns[2])
    isMyBalloonFull(unicorn2Index)
  }
}

function inflateUnicornHorn(unicornIndex, myUnicorn) {
  myUnicorn.src = `./images/unicorn-${unicornIndex}.png`
}

isMyBalloonFull = (number) => {
  if (number == 3) horseNoise.play()

  // I decided to remove my alert
  // alert(`Thank you human`)
}
