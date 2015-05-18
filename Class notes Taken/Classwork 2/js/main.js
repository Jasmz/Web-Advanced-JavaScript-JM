/*make madlibs with crazy stuff that changes everytime you click it! homework!*/

var blackBox = document.querySelector('.box-1'); /*finding a specific stuff from the html and using it on java*/
 /*just like debug.log*/

/*var allBoxes = document.querySelectorAll('.box'); *//*To select more than one object*/
/*console.log(allBoxes.length);*/ /*If length is put beside a thing after log you only see how many are in there*/
var mybody = document.querySelector('body');
var redBox = document.querySelector('.box-2');
var greenBox = document.querySelector('.box-3');
var blueBox = document.querySelector('.box-4');
var paragraph = document.querySelector('.paragraph');
var paragraphText = paragraph.innerHTML;

var myRandomWords = ['Banana', 'Barf', 'Batman', 'Bart Simpson']; /*An array*/
var randomNumber = Math.floor(Math.random() * myRandomWords.length); /*To randomnize stuff and makes number into whole numbers not floats*/ 
var randomWord = myRandomWords[randomNumber];


blackBox.addEventListener('click', function (event) { /*an event that will trigger whenever the said object is clicked*/
/*mybody.body.style.backgroundColor = '#000000';*/
paragraph.style.color = '#0000ff';
paragraph.classList.add('paragraph-1');/*to add stuff*/
paragraph.classList.remove('paragraph');/*to remove stuff*/
});

redBox.addEventListener('click', function (event1) {
document.body.style.backgroundColor = '#ff0000';
paragraph.style.color = '#00ff00';
 /*To randomnize stuff and makes number into whole numbers not floats*/ 
/*var randomWord = myRandomWords[randomNumber];*/

paragraph.innerHTML = getNewWord();
});

greenBox.addEventListener('click', function (event2) {
document.body.style.backgroundColor = '#00ff00'; 
paragraph.style.color = '0000ff';
});

blueBox.addEventListener('click', function (event3) {
document.body.style.backgroundColor = '#0000ff';
paragraph.style.color = '#000000';
});

function getNewWord() {
var myRandomWords = ['Banana', 'Barf', 'Batman', 'Bart Simpson']; /*An array*/
var randomNumber = Math.floor(Math.random() * myRandomWords.length);
return randomWord;
};

/*paragraph.innerHTML = 'Holy crap.';*/








