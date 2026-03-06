let Score = JSON.parse(localStorage.getItem("Score")) || {
                Win: 0,
                Lose: 0,
                Tie: 0
            };

        document.querySelector('.js-score').innerHTML = `Wins = ${Score.Win}, Losses = ${Score.Lose}, Ties = ${Score.Tie}`;

        function playgame(playerMove){
            const computerMove = PickComputerMove();
            let result = "";
            if(playerMove == "rock" && computerMove == "Rock"){
                result = "Tie."
            }else if(playerMove == "rock" && computerMove == "Paper"){
                result = "You Lose."
            }else if(playerMove == "rock" && computerMove == "Scissors"){
                result = "You Win."
            }

            if(playerMove == "paper" && computerMove == "Rock"){
                result = "You Win."
            }else if(playerMove == "paper" && computerMove == "Paper"){
                result = "Tie."
            }else if(playerMove == "paper" && computerMove == "Scissors"){
                result = "You Lose."
            }

            if(playerMove == "scissors" && computerMove == "Rock"){
                result = "You Lose."
            }else if(playerMove == "scissors" && computerMove == "Paper"){
                result = "You Win."
            }else if(playerMove == "scissors" && computerMove == "Scissors"){
                result = "Tie."
            }

            if(result == "You Win."){
                Score.Win += 1;
            }else if(result == "You Lose."){
                Score.Lose += 1;
            }else if(result == "Tie."){
                Score.Tie += 1;
            }

            localStorage.setItem('Score', JSON.stringify(Score));

            document.querySelector('.js-moves').innerHTML = `
            You
                <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
                <img src="images/${computerMove }-emoji.png" class="move-icon" alt="">
            Computer`;
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-score').innerHTML = `Wins = ${Score.Win}, Losses = ${Score.Lose}, Ties = ${Score.Tie}`;

            function PickComputerMove(){
                let computerMove = "";
                let random = Math.random();
                if(random >= 0 && random <= 1/3){
                    computerMove = "Rock";
                }else if(random > 1/3 && random <= 2/3){
                    computerMove = "Paper";
                }else{
                    computerMove = "Scissors";
                }
                return computerMove;
            }

        }
