const game = () =>{
    let pscore = 0;
    let cscore = 0;

    const startGame = () =>{

        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //play match
    const playMatch = () =>{

        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand => {
            hand.addEventListener('animationed',function(){
                this.style.animation = "";
            });
        });

        //computer Options
        const computerOptions = ['rock','paper','scissors'];


        options.forEach(option => {
            option.addEventListener('click', function(){

                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                    compareHand(this.textContent, computerChoice);
                    //updates images

                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png`

                }, 2000);


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');


        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }

    const compareHand = (playerChoice,computerChoice) =>{
        const winner  = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie!";
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins!";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer wins!";
                cscore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player wins!";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer wins!";
                cscore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins!";
                pscore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer wins!";
                cscore++;
                updateScore();
                return;
            }
        }
    };


    startGame();
    playMatch();
};

game();