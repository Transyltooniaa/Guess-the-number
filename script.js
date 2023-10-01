'use strict';

let num =  Math.trunc(Math.random()*20) + 1;
let score = 20 //state variable
let max_score = score;

document.querySelector('.check').addEventListener('click', function () 
{
    const x = Number(document.querySelector('.guess').value);
    console.log(x , typeof x); 



    if(!x)
        document.querySelector('.message').textContent = "🛑 No Number Entered !";


    else if(x == num)
    {
        document.querySelector('.message').textContent = "🎉 You guessed it right";
        document.querySelector('.number').textContent = num;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        

        if(score > max_score)
        {
            document.querySelector('.highscore').textContent = max_score;
            max_score = score;
        }

        else
            document.querySelector('.highscore').textContent = score;
    }
    
    else if(x < num)
    {
        if(score > 0)
        {
            document.querySelector('.message').textContent = "The number is greater";
            --score;
            document.querySelector('.score').textContent = score;
        
        }

        else
        {
            document.querySelector('.message').textContent = "You lost the game 😱"

        }
    }

    else if(x > num)
    {
        if(score > 0)
        {
            document.querySelector('.message').textContent = "The number is smaller";
            --score;
            document.querySelector('.score').textContent = score;
        }

        else
        {
            document.querySelector('.message').textContent = "You lost the game 😱"

        }
    }
});

document.querySelector('.again').addEventListener('click',function()
{
    num =  Math.trunc(Math.random()*20) + 1;
    score = 20;
    
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.score').textContent = 0;
    
});
