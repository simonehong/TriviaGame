
window.onload = function() {
$("#display").hide();
$("#questions").hide();
$("#start").on("click", countDown.start);
$("#score").hide();

};


//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 14;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our count down object
var countDown = {

      time: 15,
  
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
      $("#start").hide();
  
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
    $("#questions").hide();
    $("#display").hide();
    $("#title").hide();
    $("#start").hide();
    console.log("time is up");
    $("#score").show();
    
   }
  
  function question(){
    var correct = 0;
    var incorrect = 0;
    
  $("#questions").show();
    $("#div1").text("In what year did Colorado become a state?");
    $("#year").on("click", function(){
      var year = $( "input[type=radio][name=year]:checked" ).val();
    if(year === '1876'){
      correct++;
      unanswered--;
    } else {
      incorrect++;
      unanswered--;
     }
    console.log(year);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    
    });
      
    
    $("#div2").text("What is the highest mountain in Colorado?");
    $("#peak").on("click", function(){
      var peak = $( "input[type=radio][name=peak]:checked" ).val();
    if(peak === 'Mt. Elbert'){
      correct++;
      unanswered--;
    } else {
      incorrect++;
      unanswered--;
     }
    console.log(peak);

    $("#correct").text("Correct: " + correct);
      $("#incorrect").text("Incorrect: " +incorrect);
     $("#unanswered").text("Unanswered: " +unanswered);
            
    });
    $("#div3").text("What city is home to the United States Air Force Academy?");
    $("#city").on("click", function(){
      var city = $( "input[type=radio][name=city]:checked" ).val();
    if(city === 'Colorado Springs'){
      correct++;
      unanswered--;
    } else {
      incorrect++;
      unanswered--;
     }
    console.log(city);

    $("#correct").text("Correct: " + correct);
      $("#incorrect").text("Incorrect: " +incorrect);
     $("#unanswered").text("Unanswered: " +unanswered);

    });
    $("#div4").text("What is Colorado's state nickname?");
    $("#nick").on("click", function(){
      var nick = $( "input[type=radio][name=nick]:checked" ).val();
    if(nick === 'Centennial State'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(nick);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);

    });
    $("#div5").text("In what national park are ancient Indian cliff dwellings located?");
    $("#park").on("click", function(){
      var park = $( "input[type=radio][name=park]:checked" ).val();
    if(park === 'Mesa Verde'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(park);

    $("#correct").text("Correct: " + correct);
      $("#incorrect").text("Incorrect: " +incorrect);
     $("#unanswered").text("Unanswered: " +unanswered);

    });

    $("#div6").text("What is Colorado's state flower?");
    $("#flower").on("click", function(){
      var flower = $( "input[type=radio][name=flower]:checked" ).val();
    if(flower === 'Rocky Mountain Columbine'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(flower);
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);

    });

    $("#div7").text("What is the capital of Colorado?");
    $("#cap").on("click", function(){
      var cap = $( "input[type=radio][name=cap]:checked" ).val();
    if(cap === 'Denver'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(cap);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);

    });

    $("#div8").text("What is the state tree of Colorado?");
    $("#tree").on("click", function(){
      var tree = $( "input[type=radio][name=tree]:checked" ).val();
    if(tree === 'Colorado Blue Spruce'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(tree);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);

    });

    $("#div9").text("Which state is part of the four corners area?");
    $("#state").on("click", function(){
      var state = $( "input[type=radio][name=state]:checked" ).val();
    if(state === 'Utah'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(state);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    });

    $("#div10").text("Eighty percent of Colorado's water comes from what source?");
    $("#water").on("click", function(){
      var water = $( "input[type=radio][name=water]:checked" ).val();
    if(water === 'snow'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(water);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    });

    $("#div11").text("What is the tallest building in Denver?");
    $("#build").on("click", function(){
      var build = $( "input[type=radio][name=build]:checked" ).val();
    if(build === 'Republic Plaza'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(build);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    });

    $("#div12").text("What Western Slope town is known for its peaches?");
    $("#peach").on("click", function(){
      var peach = $( "input[type=radio][name=peach]:checked" ).val();
    if(peach === 'Palisade'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(peach);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    });

    $("#div13").text("Two major Highway Interstate that intersects in Denver?");
    $("#hwy").on("click", function(){
      var hwy = $( "input[type=radio][name=hwy]:checked" ).val();
    if(hwy === 'I-25 and I-70'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(hwy);

    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);
    });

    $("#div14").text("What Colorado city is the highest in the United States?");
    $("#local").on("click", function(){
      var local = $( "input[type=radio][name=local]:checked" ).val();
    if(local === 'Leadville'){
      correct++;
      unanswered--;
    }  else{
        incorrect++;
        unanswered--;
      }
     
    console.log(local);
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " +incorrect);
   $("#unanswered").text("Unanswered: " +unanswered);

  
    });

    function stop () {

      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    }

    $("#btnSubmit").on("click", function(){
      $("#questions").hide();
      $("#display").hide();
      $("#start").hide();
      
        $("#score").show();

      
      stop();
           

  });
  }

  

   
    
    
      
      

       

  

    