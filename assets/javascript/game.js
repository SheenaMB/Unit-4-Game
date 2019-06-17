

var randomGoalNumber;
var lose = 0;
var win = 0;
var userScore = 0;

// function start();

//start of game randomly generate number; this is the random GOAL number
randomGoalNumber = Math.floor(Math.random() * 101 + 19);
//this puts "Random Number" into the text  
$("#randomNumber").text("Goal Number: " + randomGoalNumber);

//assigning four crystals random numbers as well between 1-12.
for (var i = 0; i < 4; i++) {

    var randomCN = Math.floor(Math.random() * 11 + 1);
    console.log(randomCN);

    var crystal = $("<div>");
    crystal.addClass('crystal');
    crystal.attr('value', randomCN);
    $(".crystals").append(crystal);

}
//create score box and .text the random number when clicked.  

//each time you click on a crystal, the value is assigned to a new var 
$(".crystal").on('click', function () {
    var crystalValue = parseInt($(this).attr("value"));

    // this adds the crystal value to the userScore
    userScore = userScore + crystalValue;

    //create score box and .text the random number when clicked.
    $("#userScore").text("Your Score: " + userScore);

    if (userScore === randomGoalNumber){
        alert("you win");
        $("#totalScore").text("Win: " + win);
        win++;
    } else if (userScore > randomGoalNumber){
        alert("you lose");
        $("#totalScore").text("Lose: " + lose);
        lose++;

    }


});

//start of game randomly generate number


//four crystals that represent random numbers as well between 1-12.
//each time you click on a crystal it adds to your score.
//if your score matches = the OG random number, then Win increases by ++ and "you win" is pushed to the score box
//else if your score is >= the OG random number then you Lose and Loss numbr ++ and you lose is pushed to score box
//then reset