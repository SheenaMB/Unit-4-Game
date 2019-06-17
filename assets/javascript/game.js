

var randomGoalNumber;
var lose = 0;
var win = 0;
var userScore;
var crystalValues;

function start() {

    randomGoalNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text("Goal Number: " + randomGoalNumber);
    userScore = 0;
    crystalValues = [];
    for (var i = 0; i < 4; i++) {

        var randomCN = Math.floor(Math.random() * 11 + 1);
        crystalValues.push(randomCN);
        console.log(randomCN);
    }
}

start();

//start of game randomly generate number; this is the random GOAL number

//this puts "Random Number" into the text  
//assigning four crystals random numbers as well between 1-12.

//create score box and .text the random number when clicked.  

//each time you click on a crystal, the value is assigned to a new var 
$(".crystal-pic").on('click', function () {
    var crystalIndex = parseInt($(this).attr("value"));

    crystalValue = crystalValues[crystalIndex];

    // this adds the crystal value to the userScore
    userScore = userScore + crystalValue;

    //create score box and .text the random number when clicked.
    $("#userScore").text("Your Score: " + userScore);

    if (userScore === randomGoalNumber) {
        alert("you win");
        $("#wins").text("Win: " + ++win);
        userScore = 0;
        $("#userScore").text("Your Score: 0");
        start();

    } else if (userScore > randomGoalNumber) {
        alert("you lose");
        $("#losses").text("Lose: " + ++lose);
        userScore = 0;
        $("#userScore").text("Your Score: 0");
        start();

    }


});

//start of game randomly generate number


//four crystals that represent random numbers as well between 1-12.
//each time you click on a crystal it adds to your score.
//if your score matches = the OG random number, then Win increases by ++ and "you win" is pushed to the score box
//else if your score is >= the OG random number then you Lose and Loss numbr ++ and you lose is pushed to score box
//then reset