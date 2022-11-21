'use strict';

let secretNumber, score = 20, highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
  document.querySelector('.score').textContent = score;
}

const generateRandom = function()
{
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

generateRandom();

document.querySelector('.check').addEventListener('click', function ()
{
  const guess = Number(document.querySelector('.guess').value);

  if (!guess)
  {
    displayMessage ('No number!');
  } 
  else if (guess === secretNumber)
  {
    displayMessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore)
    {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 
  else if(guess !== secretNumber)
  {
    if (score > 1) 
    {
      displayMessage (guess > secretNumber ? 'Too high!': 'Too low!');
      score--;
      displayScore(score);
    } 
    else 
    {
      displayMessage ("You've lost the game");
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function ()
{
  score = 20;
  generateRandom();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector('.guess').value = '';
});
