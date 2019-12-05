function computerPlay() {
    const computerNum = Math.random();
    if (computerNum <= (1/3)) {
        return 'Rock'
    } else if (computerNum > (2/3)) {
        return 'Paper'
    } else { 
        return 'Scissors'
    }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return 'Tie!';
    } else if (player === 'rock') {
        switch (computer) {
            case 'paper':
                computerScore++
            return 'You lose! Paper beats rock!';
            break;
            case 'scissors': 
                playerScore++
            return 'You win, Rock beats Scissors!';
            break;
            } 

        } else if (player === 'paper') {
            switch (computer) {
                case 'rock': 
                return 'You win, Paper beats Rock!';
                    playerScore++
                break;
                case 'scissors':
                    computerScore++
                return 'You lose, Scissors beats Paper!';
                break;
            }
        } else (player === 'scissors'); 
            switch (computer) {
                case 'rock':
                    computerScore++
                return 'You lose, Rock beats Scissors';
                break;
                case 'paper':
                    playerScore++
                return 'You win!  Scissors beats Paper!';
                break;
                default :
                return 'False start!  Five Yard Penalty!';
            }
        }

    function game() {
        for (let i = 0; i < 5; i++) {

            const player = prompt('Rock, Paper, or Scissors?')
            const computer = computerPlay()

            console.log(playRound(player, computer))
        }
    }

        if (playerScore > computerScore) {
            console.log(`Player won with a score of ${playerScore}!`)
        } else  {
            console.log(`Computer won with a score of ${computerScore}!`)
        }