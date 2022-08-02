// variables for starting page 
var mainEl = document.querySelector(".container")
const startButton = document.getElementById('start-b')
const nextButton = document.getElementById('next-b')
const questContainerEl = document.getElementById('questions-container')
const questionEl = document.getElementById('quiz-question')
const optionButton = document.getElementById('answerbuttons')
var qi = 0


//Function for the start button - start button and information are on one page
startButton.addEventListener("click", function () {
    console.log('Start')
    startButton.classList.add('hide')
    questionIndex = [0]
    questContainerEl.classList.remove('hide')
    startNextQuestionTIMER()
    startNextQuestion()
    highscore()
})

// click start button a timer starts
//style:timer in the right hand corner

function startNextQuestionTIMER() {
    var count = 10;
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = "Completed!";
            alert("Out of time!");
        }
    }, 1000);
}
//Quiz Questions and options and answers
var questions = [

    {
        text: "Commonly used data types DO not include.",
        options:
            ["a.booleans", "b. Strings", "c. Alerts", "d. Numbers"],
        answer: "a"
    },

    {
        text: "Which of the following methods is used to access HTML elements using javascript?",
        options: ["a. getElementbyid()", "b. getElementByTomorrow()", "c. getItStarted()", "d. getIT()"],
        answer: "a"
    },

    {
        text: "The condition in an if/else statement is enclosed with?",
        options:
            ["a. quotes", "b. curly brackets", "c. parenthesis", "d. square brackets"],
        answer: "b"
    },

    {
        text: "Which of the following keywords is used to define a variable in Javascript?",
        options:
            ["a. var", "b. let", "c. const", "d. all the above"],
        answer: "d"
    },
]

//Question Functions that loop throught the quiz questions  
function startNextQuestion() {
    document.querySelector("#quiz-question").textContent = questions[qi].text
    document.querySelector("#answerbuttons").innerHTML = ""
    questions[qi].options.forEach(function (option, i) {
        // console.log(i)
        // console.log(option)

        var btn = document.createElement("button")
        btn.textContent = option;
        btn.setAttribute("value", option)
        btn.onclick = evaluateAnswer;
        document.querySelector("#answerbuttons").appendChild(btn)
    })
}

// evaluate answer section
function evaluateAnswer() {
    console.log(questions[qi].answer)
    console.log(this.value);
    console.log(questions[qi].answer == this.value[0])

    if (this.value[0] === questions[qi].answer) {
        console.log("correct")
    } else console.log ('incorrect')

    qi++;
    startNextQuestion();
}

//next Quiz Div populates 
var quiz = document.querySelector(".quiz-question")

//highscore function
//function highscore() 
