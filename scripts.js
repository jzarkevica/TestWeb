/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function draw(){ 
 if(document.getElementById("poga").hasChildNodes()){
                    document.getElementById("poga").removeChild(document.getElementById("poga").childNodes[0]);
                }   
    
const cards = document.querySelectorAll('.memory-card');

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
  }



function shuffle() {
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}

cards.forEach(card => card.addEventListener('click', flipCard));

}