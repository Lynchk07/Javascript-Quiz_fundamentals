//count down timer - Right hand side in CSS
const startmin = 10;
//changes the time 
let time = startmin * 60;

const countdownEl = document.getElementById('countdown');



function countdownUpdate () {
    const minutes = Math.floor(time /60);

    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML =  `${seconds}`;
    time--;
}

setInterval(countdownUpdate,1000);

//quiz prompts that change the webpage when answered

// recorded score

//Text box entry form that logs score and name

//Ability to clear data from the text box form
