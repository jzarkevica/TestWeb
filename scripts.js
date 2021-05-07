/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const cards = document.querySelectorAll('.memory-card');


var di=0;
var start= new Date().getTime();
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
  console.log("flip");
  
  
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  
  console.log("check");
  
}

function disableCards() {
    
    
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
  di=di+1;
  if(di==8){
    var end = new Date().getTime();
    var sekundes = (end - start)/1000;
        if(sekundes>60){
            let min =sekundes/60-(sekundes/60)%1;
            sekundes=Math.round((sekundes-60*min)*1000)/1000;
            setTimeout(function(){alert("RESULTS: " + min + " min " + sekundes+" s");}, 500);
        }else {
            setTimeout(function(){alert("RESULTS: " + sekundes + " s");}, 500);
        }          
       //  console.log("WIN");  
      }else console.log("disable");
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
 // console.log("unflip");
 

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  console.log("resetboard");

}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));