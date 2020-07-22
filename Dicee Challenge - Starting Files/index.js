function random() {
  var imgArr = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

img1.setAttribute('src', random());
img2.setAttribute('src', random());

if (img1.src === img2.src) {
  document.querySelector('h1').innerHTML = 'Its a tie!';
} else if (img1.src < img2.src){
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else if (img1.src > img2.src){
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
}
