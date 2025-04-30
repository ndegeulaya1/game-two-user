'use strict';

const score1= document.getElementById('score--0');
const score2 =document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn-roll');
const btnStart = document.querySelector('.btn-start');
const btnHold = document.querySelector('.btn-hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const player1 = document.getElementById('player0');
const player2 = document.getElementById('player1');
const winner0 = document.getElementById('winner-0');
const winner1 = document.getElementById('winner-1');

let activePlayer = 0;
let playing=true;
const hist=[0,0];
const score =[0,0];
let currentScore=0;

function switchPlayer(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  
  activePlayer = activePlayer===0 ? 1: 0;
  player1.classList.toggle('bg-red-500');
  player2.classList.toggle('bg-red-500');
  player1.classList.toggle('blur-[1px]');
  player2.classList.toggle('blur-[1px]');

   currentScore = 0;
}
btnRoll.addEventListener('click', function(){
  if(playing){


const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
  diceImage.classList.remove('hidden');
  diceImage.src=`image/dice${dice}.png`;

  if(dice!=1){
  currentScore+=dice;
  document.getElementById(`current--${activePlayer}`).textContent=currentScore; 
  }
  else{
   //switch player
  switchPlayer()
  }
}
});

btnHold.addEventListener('click', function(){
if(playing){


  score[activePlayer]=score[activePlayer]+currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
 

  if(score[activePlayer]>=50){
 
    playing=false;
    diceImage.classList.remove('hidden');
    document.getElementById(`player${activePlayer}`).style.background='#00FF00';
    document.getElementById(`winner-${activePlayer}`).innerHTML='🎉🎉 WINNER 🎉🎉';
  


    
  }
  else{
    switchPlayer();
  }
}
  

});




btnStart.addEventListener('click',function(){
  activePlayer = 0;
  playing = true;
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  diceImage.classList.add('hidden');

  document.getElementById(`player0`).style.background='';
  document.getElementById(`player1`).style.background='';

  player1.classList.remove('bg-red-500');
  player2.classList.add('bg-red-500');
  player1.classList.remove('blur-[1px]');
  player2.classList.add('blur-[1px]');

  winner0.innerHTML='';
  winner1.innerHTML='';


 

});

