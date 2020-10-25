const button = document.getElementById('budon');
const projekt = document.querySelector('.projekter');
const card = document.querySelector('.card__indre');
const carde = document.querySelector('.card__indree');
const cardee = document.querySelector('.card__indreee');

const kontakt = document.getElementById('kontakt');
const kontaktSide = document.querySelector('.kontakt');

const projekter = document.getElementById('projekte');
const projekterSide = document.querySelector('.projekter');

const kompetencer = document.getElementById('kompetencer');
const kompetencerSide = document.querySelector('.kompetence-container');


button.addEventListener('click', () => {
    projekt.scrollIntoView({behavior:"smooth"})
})

kontakt.addEventListener('click', () => {
 kontaktSide.scrollIntoView({behavior:"smooth"})
})

projekter.addEventListener('click', () => {
    projekterSide.scrollIntoView({behavior:"smooth"})
})

kompetencer.addEventListener('click', () => {
 kompetencerSide.scrollIntoView({behavior:"smooth"})
})



$(document).ready(function () {
$('.nav-hamburger').click(function(){
$('.nav-list').toggleClass('active-nav');    
})
})


$(document).ready(function () {
$('.submit').click(function (event) {
console.log("click");

const navn = $('#navn').val()
const email = $('#email').val()
const tekst = $('#tekst').val()
$('.status').empty();

if(email.length > 5 && email.includes('@') && email.includes('.')){

}
else{
    $('.status').append('<p>Fejl</p>');
    $('.status').addClass('fejl');
    event.preventDefault();

}
if(navn.length > 2){

} else{
    $('.status').append('<p> Navnet er ikke gyldigt</p>')
    $('.status').addClass('fejl');
    event.preventDefault();
}

if(tekst.length > 6){
    $('.status').append('<p>Bedsked er sendt</p>')
    $('.status').addClass('success');
}
else{
    $('.status').append('<p> Teksten er for lille at sende</p>')
    $('.status').addClass('fejl');
    event.preventDefault();

}

})
})

//FØRSTE MODAL
const modalBTN = document.getElementById('demo');
const modalBG = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
modalBG.classList.remove('bg-active');
})

modalBTN.addEventListener('click', function(){
modalBG.classList.add('bg-active');
});


//ANDET MODAL

const modalClosee = document.querySelector('.modall-close');
const modalBGG = document.querySelector('.modall-bg');
const modalBTNN = document.querySelector('.modall-close')
const multiplayerKnap = document.getElementById('multiplayer');

modalBTNN.addEventListener('click', () => {
modalBGG.classList.remove('bg-active');
})

multiplayerKnap.addEventListener('click', function(){
modalBGG.classList.add('bg-active');
});

//SIDSTE MODAL

const modalBGGG = document.querySelector('.modalll-bg');
const modalBTNNN = document.querySelector('.modalll-close')
const studerenderKnap = document.querySelector('.studerende');

modalBTNNN.addEventListener('click', () => {
modalBGGG.classList.remove('bg-active');
})

studerenderKnap.addEventListener('click', function(){
modalBGGG.classList.add('bg-active');
});

//SLUT MED MODAL



card.addEventListener('click', () => {
card.classList.toggle('is-flipped');
})
carde.addEventListener('click', () => {
    carde.classList.toggle('is-flipped');
    })

    cardee.addEventListener('click', () => {
        cardee.classList.toggle('is-flipped');
        })





