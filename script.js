//variables to keep track of quiz state
var currentQuestionIndex = 0;
var timer = 30
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//TODO add list of questions
var questions = 
[
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: 3
  },
  
  {
    question: "What is the correct way to write a JavaScript array??",
    choices: ["var colors = (1: 'red', 2: 'yellow', 3: 'blue'", "var colors = ['red', 'yellow', 'blue']", "var colors = 1=('red'), 2=('yellow'), 3=('blue')", "var colors = 'red', 'yellow', 'blue"],
    answer: 1
  },

  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onclick", "onchange", "onmouseover"],
    answer: 1
  }
  
  
]

var score = 0;

//function startQuiz() {

  // hide start screen
window.addEventListener('DOMContentLoaded', (event) => {
 
  $("#start").on("click", function() {
    $(".start").hide();
    // hide the start stuff
    $("#questions").removeClass("hide");
    // then we need the show the questions

    getFirstQuestion();
  })

 
  //start timer
  $("#start").on("click", function() {
    setInterval(function() {
      timer --;
        if (timer >= 0) {
        span = document.getElementById("time");
        span.innerHTML = timer;
        }
        if (timer === 0) {
        alert("Times up, sucka!");
        clearInterval(timer);
        quizEnd();
      }
      }, 1000);
    }) 

  }) 
 
  function getFirstQuestion() {
    // get current question object from array

    $('#question-title').text(questions[currentQuestionIndex].question)
    // update title with current question
    //for loop for each choice 
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      // clear out any old question choices

      // loop over choices

      // create new button for each choice

      // attach click event listener to each choice

      // display on the page
      var choiceButton = $("<button>");
      choiceButton.text(questions[currentQuestionIndex].choices[i]);
      choiceButton.click(function (event) {
        //check if you clicked the right button
        if (event.target.innerText == '<script>') {
          score++
        } else {
          timer = timer - 10;
        }
        currentQuestionIndex++;
        getSecondQuestion()
      });
      $("#choices").append(choiceButton);
    }
     
  }

  function getSecondQuestion() {
    $("#choices").empty();
    $('#question-title').text(questions[currentQuestionIndex].question)
    // update title with current question
    //for loop for each choice 
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      
      // display on the page
      var choiceButton = $("<button>");
      choiceButton.text(questions[currentQuestionIndex].choices[i]);
      choiceButton.click(function (event) {
        //check if you clicked the right button
        if (event.target.innerText == "var colors = ['red', 'yellow', 'blue']") {
          score++
        } else {
          timer = timer - 10;
        }
        currentQuestionIndex++;
        getThirdQuestion()
      });
      $("#choices").append(choiceButton);
    }
     
  }
  
  function getThirdQuestion() {
    $("#choices").empty();
    $('#question-title').text(questions[currentQuestionIndex].question)
    // update title with current question
    //for loop for each choice 
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
      
      // display on the page
      var choiceButton = $("<button>");
      choiceButton.text(questions[currentQuestionIndex].choices[i]);
      choiceButton.click(function (event) {
        //check if you clicked the right button
        if (event.target.innerText == "onclick") {
          score++
        } else {
          timer = timer - 10;
        }
        currentQuestionIndex++;
        quizEnd()
      });
      $("#choices").append(choiceButton);
    }
     
  }

function quizEnd() {
  // stop timer
  clearInterval(timer);
  
   // show end screen
  $("#end-screen").removeClass("hide");

  // show final score
  document.getElementById('final-score').innerHTML = score + " out of 3";
  // hide questions section
  $("#question-title").hide();
  $(".choices").hide();
}

function clockTick() {
  // update time


  // check if user ran out of time
  if (timer <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = ("")

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array


    // format new score object for current user

    // save to localstorage


    // redirect to next page

  }
}


// user clicks button to submit initials

// user clicks button to start quiz

