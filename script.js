/** Variables */
let PlayerChoice = null;
let ComputerChoice = null;
let PlayerScore = null;
let ComputerScore = null;
let randNum = null;
let GameStatus = null;

    /**Function for getting a random number between 0-3 for the 3 choices */
    function getrandomNumber(max)
    {
        return Math.floor(Math.random() * max);
    }

    /**Function for picking the computer choice*/
    function getComputerChoice()
    {
        if(getrandomNumber(3) === null)
        {
            console.log("Computer choice not captured");
        }

        randNum = getrandomNumber(3);
        if(randNum === 0)
        {
            ComputerChoice = "rock";
            return ComputerChoice;
        }
        else if(randNum === 1)
        {
            ComputerChoice = "paper";
            return ComputerChoice;
        }
        else if(randNum === 2)
        {
            ComputerChoice = "scissors";
            return ComputerChoice;
        }

    }

    /**Validating the player choice */
    function CheckPlayerChoice(choice)
    {
        if(PlayerChoice === "rock" || PlayerChoice === "paper" || PlayerChoice === "scissos")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /**Function for capturing the player choice */
    function getPlayerChoice()
    {
        /**capturing the user input */
        let word = prompt("Enter 1 of the choices: Rock,Paper or Scissors");
        PlayerChoice = word.toLowerCase();

        /**checking if user input is correct*/
        while(CheckPlayerChoice(PlayerChoice) !== true)
        {
             /**capturing the user input */
            let word = prompt("Enter 1 of the choices: Rock,Paper or Scissors");
            PlayerChoice = word.toLowerCase();
        }
        return PlayerChoice;
    }

    /**Checking which player won the round */
   function RoundDecider(PlayerChoice,ComputerChoice)
   {
        if(ComputerChoice === "rock" && PlayerChoice === "rock")
        {
            console.log("*** Computer: Rock - Player: Rock *** \n");
            console.log("******* DRAW *******");  
        }
        else if(ComputerChoice === "rock" && PlayerChoice === "paper")
        {
            console.log("*** Computer: Rock - Player: Paper *** \n");
            console.log("******* YOU WIN *******");
            PlayerScore += 1;
        }
        else if(ComputerChoice === "rock" && PlayerChoice === "scissors")
        {
            console.log("*** Computer: Rock - Player: Scissors *** \n");
            console.log("******* YOU LOOSE *******");
            ComputerScore += 1;
        }
        else if(ComputerChoice === "paper" && PlayerChoice === "paper")
        {
            console.log("*** Computer: Paper - Player: Paper *** \n");
            console.log("******* DRAW *******");
        }
        else if(ComputerChoice === "paper" && PlayerChoice === "rock")
        {
            console.log("*** Computer: paper - Player: rock *** \n");
            console.log("******* YOU LOOSE *******");
            ComputerScore += 1;
        }
        else if(ComputerChoice === "paper" && PlayerChoice === "scissors")
        {
            console.log("*** Computer: paper - Player: scissors *** \n");
            console.log("******* YOU WIN *******");
            PlayerScore += 1;
        }
        else if(ComputerChoice === "scissors" && PlayerChoice === "scissors")
        {
            console.log("*** Computer: scissors - Player: scissors *** \n");
            console.log("******* DRAW *******");
        }
        else if(ComputerChoice === "scissors" && PlayerChoice === "paper")
        {
            console.log("*** Computer: scissors - Player: paper *** \n");
            console.log("******* YOU LOOSE *******");
            ComputerScore += 1;
        }
        else if(ComputerChoice === "scissors" && PlayerChoice === "rock")
        {
            console.log("*** Computer: scissors - Player: rock *** \n");
            console.log("******* YOU WIN *******");
            PlayerScore += 1;
        }
   }

   /**Checking the winner for the game */
   function DecideWinner()
   {
    if(PlayerScore > ComputerScore)
    {
        console.log(`Computer Score: ${ComputerScore} \n`);
        console.log(`Player Score: ${PlayerScore} \n`);
        console.log("******* YOU WIN THE GAME *******");

    }
    else if(PlayerScore < ComputerScore)
    {
        console.log(`Computer Score: ${ComputerScore} \n`);
        console.log(`Player Score: ${PlayerScore} \n`);
        console.log("******* YOU LOST THE GAME *******");
    }
   }

   function PlayRound()
   {
    getComputerChoice();
    getPlayerChoice();
    RoundDecider();
   }

   function PlayGame()
   {
    console.log("**** Welcome Player **** \n");
    for(let i = 0; i < 5; i++)
    {
        PlayRound();
    }
   }

   PlayGame();