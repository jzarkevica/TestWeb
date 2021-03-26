/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    
    const cardArray= [
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'book',
          img: 'attels/book.jpg'  },
      { name: 'carrot',
          img: 'attels/carrot.jpg'  },
      { name: 'dog',
          img: 'attels/dog.jpg'  },
      { name: 'eye',
          img: 'attels/eye.jpg'  },
      { name: 'frog',
          img: 'attels/frog.jpg'  },
      { name: 'guitar',
          img: 'attels/guitar.jpg'  },
      { name: 'house',
          img: 'attels/house.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  },
      { name: 'apple',
          img: 'attels/apple.jpg'  }
    ];
      
    
    
    cardArray.sort(()=>0.5- Math.random());
    
    
    const grid= document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen=[];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
    for(let i=0; i<cardArray.length; i++){
    var card = document.createElement('img');
    card.setAttribute('src', 'attels/background.jpg');
    card.setAttribute('data-id',i);
    // card.addEventListener('click', flipcard)
    grid.appendChild(card);
        }
    }
    
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'attels/white.jpg');
            cards[optionTwoId].setAttribute('src', 'attels/white.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'attels/background.jpg');
            cards[optionTwoId].setAttribute('src','attels/background.jpg');
            alert('Sorry, try again');
        }
        cardsChosen=[];
        cardsChosenId=[];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations!';
        }
        
    }
    
    
    
    
    
    function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
    
    
    
    
    }
    
    
    
    
    });
