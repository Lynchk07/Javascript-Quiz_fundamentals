// variables for starting page 
var mainEl = document.querySelector(".title")
var startButton = document.querySelector(".start")
var que = 0
var quiz = document.querySelector(".question_text")

//Function for the start button - start button and information are on one page
startButton.addEventListener("click",function(){
    mainEl.setAttribute("class","start_hide")
    quiz.removeAttribute("class","start_hide")
    quizQuestions()
})

// click start button a timer starts
    //style:timer in the right hand corner
    var count=20;
    var interval=setInterval(function(){
        document.getElementById('count').innerHTML = count;
       count--;
        if(count === 0){
            clearInterval(interval);
            document.getElementById('count').innerHTML = "Completed!";
            alert("Out of time!");
         }
}, 1000);    

//Quiz Questions and options
var questions=[

    {text:"Commonly used data types DO not include.",
    options:
    ["a.booleans","b. Strings", "c. Alerts","d. Numbers"],
    answer:"a"},

    {text:"Which of the following methods is used to access HTML elements using javascript?",
    options:["a. getElementbyid()","b. getElementByTomorrow()", "c. getItStarted()","d. getIT()"],
    answer:"a"},

    {text:"The condition in an if/else statement is enclosed with?",
    options:
    ["a. quotes","b. curly brackets", "c. parenthesis","d. square brackets"],
    answer:"b"},

    {text:"Which of the following keywords is used to define a variable in Javascript?",
    options:
    ["a. var","b. let", "c. const","d. all the above"],
    answer:"d"},
]

//First Question 
function quizQuestions(){
    document.querySelector(".question_text").textContent = questions[que].text
    document.querySelector(".answers").innerHTML=""
    questions[que].options.forEach(function(options)
    {
        var btn = document.createElement("button")
        btn.textContent = options
        btn.setAttribute("value",options)
        btn.onclick = evaluateAnswer
        document.querySelector(".answers").appendChild(btn)
    })
}

function evaluateAnswer(){
    console.log(this.value)
    que++;
    quizQuestions()
}

//next Quiz Div populates 
var quiz=document.querySelector(".question_text")