
let score = JSON.parse(localStorage.getItem('score'));

('score') || 
{
    wins: 0,
    losses: 0,
    ties: 0
}

if(!score)
{
    score = 
    {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

function playGame(playMove)
{
        const computerMove = pickComputerMove();

        let result = ''

        if(playMove === 'Scissor')
        {
            if(computerMove === 'rock')
            {
                result = 'You lose'; 
            }
            else if(computerMove === 'paper')
            {
                result = 'You Win';
            }
            else if(computerMove === 'Scissor')
            {
                result = 'Tie';
            }
        
        }
        else if(playMove === 'paper')
        {
            if(computerMove === 'rock')
            {
                result = 'You Win'; 
            }
            else if(computerMove === 'paper')
            {
                result = 'Tie';
            }
            else if(computerMove === 'Scissor')
            {
                result = 'You lose';
            }

        }
        else if(playMove === 'rock')
        {
            if(computerMove === 'rock')
            {
                result = 'Tie'; 
            }
            else if(computerMove === 'paper')
            {
                result = 'You lose';
            }
            else if(computerMove === 'Scissor')
            {
                result = 'You Win';
            }
        }

        if(result === 'You Win')
        {
            score.wins += 1;
        }
        else if(result === 'You lose')
        {
            score.losses += 1;
        }
        else if(result === 'Tie')
        {
            score.ties += 1;
        }

        localStorage.setItem('score',JSON.stringify(score))

        alert(`You picked ${playMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        );
}



let computerMove = '';
function pickComputerMove()
{
    const ranNum = Math.random()
    if(ranNum >= 0 && ranNum < 1/3)
    {
        computerMove = 'rock';
    }
    else if(ranNum >= 1/3 && ranNum < 2/3)
    {
        computerMove = 'paper'
    }
    else if(ranNum >= 2/3 && ranNum < 1)
    {
        computerMove = 'Scissor'
    }
    return computerMove
}
