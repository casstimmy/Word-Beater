//Global
let time = 6;
let score = 0;
let highScores = 0;
let isPlaying;

//Call-back variables
const textInput = document.getElementById('game-input-main');
const textOut = document.querySelector('.game-input-word');
const timeOut = document.getElementById('timer');
const timeOut2 = document.getElementById('timer2');
const scoreOut = document.getElementById('scores');
const massage = document.getElementById('massage');
const highScore = document.getElementById('highscore')
const words = ['hat', 'river', 'lucky', 'statue', 'cocktail', 'joke', 'developer', 'echo', 'javascript', 'python', 'revolver', 'runaway'];


//eventlistener
window.addEventListener('load', eventlistener)

function eventlistener(){
    loadWords(words);
    textInput.addEventListener('input', startMatch)
    setInterval(countdown, 1000);
    setInterval(check, 150);
}



//functions
function loadWords(words){
    const randWord = Math.round(Math.random() * words.length)
    textOut.innerHTML = words[randWord]
}

function countdown(){
    if (time > 0){
        time--;
    }else if (time === 0){
        isPlaying = false;
    }
    timeOut.innerHTML = time;
    timeOut2.innerHTML = time;
}
function startMatch(){
    if (wordMatch()){
        time = 6;
        loadWords(words);
        textInput.value = '';
        score++;
        highScoreOut(score)
    }
    if (score === -1){
        scoreOut.innerHTML = 0;
    }else{
        scoreOut.innerHTML = score;
    }
   
}

function wordMatch(){
    if(textInput.value === textOut.innerHTML){
        return true;
        massage.innerHTML = 'Correct'
    }else{
        return false;
        massage.innerHTML = '';
    }
}
function check(){
    if(!isPlaying && time === 0){
        massage.innerHTML = 'Game Over !!!'
        score = -1;
    }
}

function highScoreOut(score){
        console.log(highScore)
    if (score >= highScores){
        highScores = score
        highScore.innerHTML = `High Score: ${highScores}`
        console.log(highScore)
    }else{
        highScore.innerHTML = `High Score: ${highScores}`
    }
}







