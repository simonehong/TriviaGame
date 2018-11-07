
window.onload = function() {
$("#display").hide();
$("#questions").hide();
$("#start").on("click", countDown.start);
};


//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our count down object
var countDown = {

      time: 10,
  
    reset: function() {
  
      time = 10;
        
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");
  
    },
    // starts the timer
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(countDown.count, 3000);
        clockRunning = true;
        console.log(intervalId);
        question();
       
      }
    },
          
    count: function() {

      $("#display").show();
  
      // DONE: decrement time by 1
      countDown.time--;
  
      // DONE: Get the current time, pass that into the countDown.timeConverter function,
      //       and save the result in a variable.
      var converted = countDown.timeConverter(countDown.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);

      console.log(countDown.time);

      if(countDown.time === 0) {
        clearInterval(intervalId);
        clockRunning = false;
        timeUp();
        counter = 0;
        countDown.time = 10;
      }
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    },
    
  };
  function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }
  
  function question(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
  $("#questions").show();
    $("#div1").text("In what year did Colorado become a state?");

    
    $("#div2").text("What is the heights mountain in Colorado?");
    $("#div3").text("What city is home to the United States Air Force Academy?");
    $("#div4").text("What is Colorado's state nickname?");
    $("#div5").text("In what national park are ancient Indian cliff dwellings located?");
    $("#div6").text("What is Colorado's state flower?");
    $("#div7").text("What is the capital of Colorado?");
    $("#div8").text("What is the state tree of Colorado?");
    $("#div9").text("Which state is part of the four corners area?");
    $("#div10").text("Eighty percent of Colorado's water comes from what source?");
    $("#div11").text("What is the tallest building in Denver?");
    $("#div12").text("What Western Slope town is known for its peaches?");
    $("#div13").text("What two major Highway Interstates intersect in Denver?");
    $("#div14").text("What Colorado city is the highest in the United States?");

    $(document).ready(function () { 
      $("#correct").text("Correct:" + correct);
      $("#incorrect").text("Incorrect:" +incorrect);
      });
    }
    

  
   // $(document).ready(function(){
      //$("#questions").first().show("#q1");
      //$("#questions>div:eq(0)").show("q1")
     // $("#questions>div:eq(0)").text();
    
    
      
      

       

  

     

