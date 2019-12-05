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

const player = playerSelection.toLowerCase();
const computer = computerPlay.toLowerCase();

function playRound(player, computer) {
   if (player === computer) {
        return 'Tie!';
    } else if (player === 'rock') {
        switch (computer) {
            case 'paper':
                //computerScore++
            return 'You lose! Paper beats rock!';
            break;
            case 'scissors': 
                //playerScore++
            return 'You win, Rock beats Scissors!';
            break;
            } 

        } else if (player === 'paper') {
            switch (computer) {
                case 'rock': 
                return 'You win, Paper beats Rock!';
                    //playerScore++
                break;
                case 'scissors':
                    //computerScore++
                return 'You lose, Scissors beats Paper!';
                break;
            }
        } else (player === 'scissors'); 
            switch (computer) {
                case 'rock':
                    //computerScore++
                return 'You lose, Rock beats Scissors';
                break;
                case 'paper':
                    //playerScore++
                return 'You win!  Scissors beats Paper!';
                break;
                default :
                return 'False start!  Five Yard Penalty!';
            }
        }