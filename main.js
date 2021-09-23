var goReset = document.getElementById('go-reset-button'); 
var nextReveal = document.getElementById('next-reveal-Button');

const pageText = ['I can read your mind', 'Pick a number from 01 - 99', 'Add both digits together to get a new number', 'Subtract your new number from the original number']; 
const symbols = ['0-)', '1-!', '2-@', '3-#', '4-$', '5-%', '6-^', '7-&', '8-*', '9-('];
const buttons = ['GO', 'NEXT', 'RESET', 'REVEAL'];

function goBtn() {
console.log("GO!");

}
goReset.addEventListener('click', ()=> {
    goBtn();
} )

function nextBtn() {
    console.log("NEXT");
}

nextReveal.addEventListener('click', ()=> {
    nextBtn();
} )