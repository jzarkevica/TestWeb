/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//document.addEventListener('DOMContentLoaded', () => {
    
    
    var krasinja= ['attels/apple.jpg', 'attels/book.jpg', 'attels/carrot.jpg', 'attels/dog.jpg', 'attels/eye.jpg', 'attels/frog.jpg', 'attels/guitar.jpg', 'attels/house.jpg',
        'attels/ice.jpg', 'attels/jar.jpg', 'attels/key.jpg', 'attels/lemon.jpg', 'attels/mushroom.jpg', 'attels/nose.jpg', 'attels/octopus.jpg', 'attels/pumpkin.jpg',
        'attels/queue.jpg', 'attels/rainbow.jpg', 'attels/sun.jpg', 'attels/tram.jpg', 'attels/umbrella.jpg', 'attels/vase.jpg', 'attels/watermelon.jpg', 'attels/x.jpg',
        'attels/yoyo.jpg', 'attels/zebra.jpg'];
    var burtss= ['letters/a.jpg', 'letters/b.jpg', 'letters/c.jpg', 'letters/d.jpg', 'letters/e.jpg', 'letters/f.jpg', 'letters/g.jpg', 'letters/h.jpg',
        'letters/i.jpg', 'letters/j.jpg', 'letters/k.jpg', 'letters/l.jpg', 'letters/m.jpg', 'letters/n.jpg', 'letters/o.jpg', 'letters/p.jpg',
        'letters/q.jpg', 'letters/r.jpg', 'letters/s.jpg', 'letters/t.jpg', 'letters/u.jpg', 'letters/v.jpg', 'letters/w.jpg', 'letters/x1.jpg',
        'letters/y.jpg', 'letters/z.jpg' ];
    var vardinjs= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
    var array=[];
    var masiv=[];
    
    function draw(){
        masivs=[];
    }
        if(document.getElementById("butt").hasChildNodes()){
        document.getElementById("butt").removeChild(document.getElementById("butt").childNodes[0]);
        n = document.getElementById("n").value;
    var divv = document.createElement("div");
    sajukums(n);
    if(n%2===0){
        for(var i=0; i<n; i++){
            let divv2 = document.createElement("div");
            for(var j=0; j<n; j++){                            
                let poga = document.createElement("button");
                poga.setAttribute("class","card");
                poga.style.background = "";
                let taisn = document.createElement("img");
                taisn.setAttribute("src", "attels/background.jpg");
                taisn.setAttribute("class", "taisn");
                poga.appendChild(taisn);
                poga.setAttribute("id", i*n+j);
                poga.onclick = function(){
                     if(masivs.indexOf(poga.id)===-1){
                        maina(poga.id);
                   }
                }
                divv2.appendChild(poga);                    
            }
            divv.appendChild(divv2);
        }
        document.getElementById("butt").appendChild(divv);
    }    
}

    
    
    
    
    function sajukums(m){
      saraksts=[];  
      for(let i=0;i<attels1.length-2;i++){
                array.push(attels1[i]);
                array.push(burts[i]);
  
     }
     for(let i=0;i<array.length;i++){
                var rand=Math.floor(Math.random()*array.length);
                var tmp=array[rand];
                array[rand]=array[i];
                array[i]=tmp;
            }	
    document.write(array);
    }
   // sajukums();
    
//    const grid= document.querySelector('.grid');
//    const resultDisplay = document.querySelector('#result');
//    var cardsChosen=[];
//    var cardsChosenId = [];
//    var cardsWon = [];
//
//    function createBoard() {
//    for(let i=0; i<cardArray.length; i++){
//    var card = document.createElement('img');
//    card.setAttribute('src', 'attels/background.jpg');
//    card.setAttribute('data-id',i);
//    card.addEventListener('click', flipcard)
//    grid.appendChild(card);
//        }
//    }
//    
//    function checkForMatch(){
//        var cards = document.querySelectorAll('img');
//        const optionOneId = cardsChosenId[0];
//        const optionTwoId = cardsChosenId[1];
//        if (cardsChosen[0] === cardsChosen[1]){
//            //alert('You found a match');
//            cards[optionOneId].setAttribute('src', 'attels/white.jpg');
//            cards[optionTwoId].setAttribute('src', 'attels/white.jpg');
//            cardsWon.push(cardsChosen);
//        } else {
//            cards[optionOneId].setAttribute('src', 'attels/background.jpg');
//            cards[optionTwoId].setAttribute('src','attels/background.jpg');
//            //alert('Sorry, try again');
//        }
//        cardsChosen=[];
//        cardsChosenId=[];
//        resultDisplay.textContent = cardsWon.length;
//        if (cardsWon.length === cardArray.length/2){
//            resultDisplay.textContent = 'Congratulations!';
//        }
//        
//    }
//    
//    
//    
//    
//    
//    function flipCard(){
//    var cardId = this.getAttribute('data-id');
//    cardsChosen.push(cardArray[cardId].name);
//    cardsChosenId.push(cardId);
//    this.setAttribute('src', cardArray[cardId].img);
//    if (cardsChosen.length === 2) {
//        setTimeout(checkForMatch, 500);
//    }
//    
//    
//    
//    
//    }
//    
//    createBoard();
//    
    
    
  //  });
