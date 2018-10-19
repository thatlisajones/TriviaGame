$(document).ready(function () {

    //Load questions, answer choices, answer position, and image/video links in arrays of options.
    var options = [
        {
            question: "Vine was a short-form video hosting service that allowed users to upload short, looping videos. Many makers of Vine videos regarded the strict time limit as a creative challenge. How long could a Vine video be?", 
            choice: ["10 seconds", "7 seconds", "6 seconds", "8 seconds"],
            answer: 2,
            photo: "assets/images/vine-videos/revenge-vine-sq.mp4"
         },
         {
             question: "What is 'the vine that ate the South'? It's a fast-spreading, invasive vine that was introduced from Japan into the United States in 1876. Initially, it was used as a ground-cover plant to control soil erosion.", 
            choice: ["Prickle Brier", "Patricia", "Leafy Spurge", "Kudzu"],
            answer: 3,
            photo: "assets/images/vine-videos/patricia-vine-sq.mp4"
         }, 
         {
             question: "A portion of which California Interstate Highway is known as 'the Grapevine'? It rises over the Tehachapi Mountains and into the San Joaquin Valley. In winter, this stretch of highway is often closed, stranding motorists.", 
            choice: ["405", "5", "101", "605"],
            answer: 1,
            photo: "assets/images/vine-videos/roadwork-vine-sq.mp4"
        }, 
        {
            question: "Singer Marvin Gaye scored a big hit with the song 'I Heard It Through the Grapevine' in 1968. Who recorded and released the song one year earlier, reaching number two on the Billboard pop chart?", 
            choice: ["Gladys Knight & the Pips", "Creedence Clearwater Revival", "The California Raisins", "Stevie Wonder"],
            answer: 0,
            photo: "assets/images/vine-videos/roses-vine-sq.mp4"
        }, 
        {
            question: "Vineyard Vines is a clothing company that sells 'preppy,' 'southern-styled' attire. What animal appears on the company's logo?", 
            choice: ["Sheep", "Alligator", "Emu", "Whale"],
            answer: 3,
            photo: "assets/images/vine-videos/adam-vine-sq.mp4"
        }, 
        {
            question: "Which of these regions of France is NOT known for its wine? While it's not an official wine region, it is known for its cider and calvados.", 
            choice: ["Bordeaux", "Normandy", "Languedoc", "Loire"],
            answer: 1,
            photo: "assets/images/vine-videos/matrix-vine-sq.mp4"
        }, 
        {
            question: "Which dessert wine is produced from grapes that have been frozen while still on the vine? Because the grapes must be harvested immediately after the first freeze of the season, production is limited to wine-growing regions where cold temperatures are somewhat predictible. Canada and Germany are the world's largest producers.", 
            choice: ["Ice Wine", "Eiswein", "Vin de glace", "All of the above"],
            answer: 3,
            photo: "assets/images/vine-videos/ice-vine-sq.mp4"
        }, 
        {
            question: "Eight schools make up the Ivy League athletic conference. Which of these is an Ivy League school?", 
            choice: ["Claremont College", "University of Pennsylvania", "Stanford", "Colgate University"],
            answer: 1,
            photo: "assets/images/vine-videos/tball-vine-sq.mp4"
        }, 
        {
            question: "Which edible plant grows on a shrub or bush as well as on a vine? 'Determinate' varieties grow like a shrub, reaching a certain height, flowering, and bearing fruit. 'Indeterminate' varieties grow like vines, continuously producing leaves and fruit until frost.", 
            choice: ["Grape", "Tomato", "Cherry", "Mint"],
            answer: 1,
            photo: "assets/images/vine-videos/fbi-vine-sq.mp4"
        }, 
        {
            question: "Which plant contains a toxic oil called urushiol, which can cause a painful, itchy rash if it comes in contact with your skin? Unless it is immediately washed off with soap and water, it can bond like glue and remain on skin for days or weeks. Breathing or ingesting the toxin is even more dangerous, which is why these plants should not be burned, even if they appear to be dead.", 
            choice: ["Poison Ivy", "Poison Oak", "Poison Sumac", "All of the above"],
            answer: 3,
            photo: "assets/images/vine-videos/fbi-vine-sq.mp4"
        }];

    //Define variables for game functions 
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();
    
    //Button on click to start game

    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })

    //Start timer
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    
    //Decrement timer
    function decrement() {
        $("#timeleft").html("<h3>Time left: " + timer + "</h3>");
        timer --;
    
    //Stop timer at 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time's up. Correct answer: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    
    //Full-stop the timer
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

   
    //Select random question from array
    function displayQuestion() {
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
        //Populate questionblock and answerblock with text. Employ choice variables.
      $("#questionblock").html("<h2>" + pick.question + "</h2>");
      for(var i = 0; i < pick.choice.length; i++) {
          var userChoice = $("<div>");
          userChoice.addClass("answerchoice");
          userChoice.html(pick.choice[i]);
        //Verify answer by array position
          userChoice.attr("data-guessvalue", i);
          $("#answerblock").append(userChoice);

}  

//Click to answer
$(".answerchoice").on("click", function () {
    //grab array position from userGuess
    userGuess = parseInt($(this).attr("data-guessvalue"));

    //correct or incorrect response
    if (userGuess === pick.answer) {
        stop();
        correctCount++;
        userGuess="";
        $("#answerblock").html("<p>Yes!</p>");
        hidepicture();

    } else {
        stop();
        wrongCount++;
        userGuess="";
        $("#answerblock").html("<p>Nope. The answer is: " + pick.choice[pick.answer] + "</p>");
        hidepicture();
    }
})
}

function hidepicture () {
    $("#answerblock").append("<img src=" + pick.photo + ">");
    newArray.push(pick);
    options.splice(index,1);

    var hidpic = setTimeout(function() {
        $("#answerblock").empty();
        timer= 20;

    //Display final score when complete question array is answered
    if ((wrongCount + correctCount + unanswerCount) === qCount) {
        $("#questionblock").empty();
        $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
        $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
        $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
        $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
        $("#reset").show();
        correctCount = 0;
        wrongCount = 0;
        unanswerCount = 0;

    } else {
        runTimer();
        displayQuestion();

    }
    }, 3000);


}

//Try again button

$("#reset").on("click", function() {
    $("#reset").hide();
    $("#answerblock").empty();
    $("#questionblock").empty();
    for(var i = 0; i < holder.length; i++) {
        options.push(holder[i]);
    }
    runTimer();
    displayQuestion();

})

})