document.addEventListener('DOMContentLoaded',()=>{

    var cardArray = [
        {
            name : 'pokeball',
            img : 'images/POKEBALL.png'
        },
        {
            name : 'pokeball',
            img : 'images/POKEBALL.png'
        },
        {
            name : ' pubg',
            img : 'images/PUBG.png'
        },
        {
            name : ' pubg',
            img : 'images/PUBG.png'
        },
        {
            name : 'tetris',
            img : 'images/Tetris.png'
        },
        {
            name : 'tetris',
            img : 'images/Tetris.png'
        },
        {
            name :'pug',
            img : 'images/Minecraft.png'
        },
        {
            name :'pug',
            img : 'images/Minecraft.png'
        },
        {
            name :'counterS',
            img : 'images/CS.png'
        },
        {
            name :'counterS',
            img : 'images/CS.png'
        },
        {
            name : 'controller',
            img : 'images/GC.png'
        },
        {
            name : 'controller',
            img : 'images/GC.png'
        }
    ]

    cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.getElementById("result");
var cardChosen = []; // to store the card names
var cardChosenId = []; // to store the card id
var cardsWon= [] ;//to store the match cards 
var message = document.getElementById('message');


function createBoard(){
    for(let i=0 ;i < cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src','images/cover.png');
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        grid.appendChild(card);
    }
}

//to check for match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0]===cardChosen[1]){
        message.innerHTML = "Matchhhh!!";
        cards[optionOneId].setAttribute('src','images/won.png');
        cards[optionTwoId].setAttribute('src','images/won.png');
        cardsWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src','images/cover.png');
        cards[optionTwoId].setAttribute('src','images/cover.png');
        
    
            message.innerHTML = "Try Again!!";
                   
    }

    cardChosen =[];
    cardChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray/2)
    {
        resultDisplay.textContent = 'Congratulations! you have won all the cards!';

    }
}


//flip card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name); //this will push the name of the card in the cardChosen array
    cardChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch,300);
    }
}


createBoard();
})


