# Javascript-Quiz_fundamentals
Timed out quiz on Javascript fundamentals 
//count down timer - Right hand side in CSS
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');

// var message =
  // 'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

// Timer that counts down from 5
// function countdown() {
  // var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    // if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      // timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      // timeLeft--;
    // } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      // timerEl.textContent = timeLeft + ' second remaining';
      // timeLeft--;
    // } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      // timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      // clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
    // }
  // }, 1000);
// }

// Displays the message one word at a time
// function displayMessage() {
  // var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  // var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    // if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      // clearInterval(msgInterval);
    // } else {
      // Display one word of the message
      // mainEl.textContent = words[wordCount];
      // wordCount++;
    // }
  // }, 1000);
// }

// countdown();


//quiz prompts that change the webpage when answered

// recorded score

//Text box entry form that logs score and name

//Ability to clear data from the text box form

# html
<!--Form box_ questions-->
   <div class="quiz_section">
    <div class= "quiz_title">Javascript</div></di>
   </div>

            <div class="question_list">
                <div class="Q_A">Question 1</div> 
                <div class="Q_B">Question 1</div>
                <div class="Q_C">Question 1</div>
                <div class="Q_D">Question 1</div>
                <div class="Q_E">Question 1</div>
   </div>
   </div>
   <button class = "buttons"> Yes</button>
   <button class = "buttons"> Yes</button>
   <button class = "buttons"> Yes</button>
   <button class = "buttons"> Yes</button>

   # javascript
   //puedoCODING:
//When you answer a question 
    //There should be 5 questions
//presented with another question
//when you answer a question incorrectly time is substracted from the clock 
//When all questions are answered the timer =0
//Then the game is over
//when the game is over you can use local storage to save initials and score.
//
   
//If Exit Button Clicked
// exit.onclick = ()=>{
    // info_box.classList.remove("activeInfo");//info box
// }

//If Continue Button Clicked
// continue_btn.onclick = ()=>{
    // info_box.classList.remove("activeInfo");//hide the box
    // quiz_questions.classList.remove("activeQuiz");//hide the box
// }


//Question function 
// let questions =[
    // {
        // numb:1,
        // questions:"Inside which HTML element do we put the Javascript?"
        // answer:
        // options:[
            // "script",
            // "js",
            // "scripting",
            // "element",
        // ]
    // },
    // {
        // numb:2,
        // questions:"Inside which HTML element do we put the Javascript?"
        // answer:
        // options:[
            // "script",
            // "js",
            // "scripting",
            // "element",
        // ]
    // },
    
// ]