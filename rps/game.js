const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let computerPlay =function () {
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

function playRound(playerSelection, computerPlay) {
    const player = playerSelection.toLowerCase();
    const computer = computerPlay().toLowerCase();

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
            rockButton.addEventListener('click', () => playRound('rock', computerPlay));
            paperButton.addEventListener('click', () => playRound('paper', computerPlay));
            scissorsButton.addEventListener('click', () => playRound('scissors', computerPlay));
        }

        console.log(game());
    

       // if (playerScore > computerScore) {
         //   console.log(`Player won with a score of ${playerScore}!`)
        //} else  {
          //  console.log(`Computer won with a score of ${computerScore}!`)
        //}