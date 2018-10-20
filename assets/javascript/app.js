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
             question: "A portion of which California Interstate Highway is known as 'the Grapevine'? In winter, this stretch of highway is often closed, stranding motorists.", 
            choice: ["405", "5", "101", "605"],
            answer: 1,
            photo: "assets/images/vine-videos/roadwork-vine-sq.mp4"
        }, 
        {
            question: "Singer Marvin Gaye scored a big hit with the song 'I Heard It Through the Grapevine' in 1968. Who recorded and released the song one year earlier?", 
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
            question: "Which dessert wine is produced from grapes that have been frozen while still on the vine? Canada and Germany are the world's largest producers.", 
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
            question: "Which popular food grows on a shrub or bush as well as on a vine?", 
            choice: ["Grape", "Tomato", "Cherry", "Cashew"],
            answer: 1,
            photo: "assets/images/vine-videos/fbi-vine-sq.mp4"
        }, 
        {
            question: "Which plant contains a toxic oil called urushiol, which can cause a painful, itchy rash if it comes in contact with your skin?", 
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
            $("#vinebox").hide();
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
      $("#questionblock").html("<h4>" + pick.question + "</h4>");
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
        $("#answerblock").html("<p>Nope, the answer is: " + pick.choice[pick.answer] + "</p>");
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
        $("#questionblock").html("<h3>No more questions. Here's how you fared: </h3>");
        $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
        $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
        $("#answerblock").append("<h4> Not answered: " + unanswerCount + "</h4>" );
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