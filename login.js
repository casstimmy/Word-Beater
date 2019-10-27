//Globals




//Variables
const btn = document.querySelector('.btn-play')
const cardStyle = document.querySelector('.card')


//eventlisteners
window.addEventListener('load', eventListener)
function eventListener(){
    btn.addEventListener('click', clickPlay)
}



//funtions
function clickPlay(){
    cardStyle.classList.add('card-revolve');
    console.log('working')

    setTimeout(function (){
        cardStyle.classList.remove('card-revolve')
    },5000);
}
