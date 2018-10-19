$(document).ready(function () {

    //Load questions, answer choices, answer position, and image/video links into arrays of options.
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
            question: "Which plant contains a toxic oil called urushiol, which can cause a painful, itchy rash if it comes in contact with your skin? Unless it is immediately washed off with soap and water, it can bond to the skin and remain there for days or weeks. Breathing or ingesting the toxin is even more dangerous, which is why these plants should not be burned, even if they appear to be dead.", 
            choice: ["Poison Ivy", "Poison Oak", "Poison Sumac", "All of the above"],
            answer: 3,
            photo: "assets/images/vine-videos/fbi-vine-sq.mp4"
        }];