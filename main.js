var bigText = document.getElementById('bigText');
var go = document.getElementById('go');
var resetBtn = document.getElementById('resetBtn'); 
var nextReveal = document.getElementById('nextReveal'); 

let currentPage = 0;

function nextPage(){
    currentPage++;
    renderState(); 
    console.log("Hello");
}
go.addEventListener('click', nextPage()); 
nextReveal.addEventListener('click', nextPage()); 




function renderState() {
    if (currentPage == 0){
        bigText.innerHTML = "I can read your mind.";
    }
    else if (currentPage == 1){
        bigText.innerHTML = "Pick a number from 01-99.";
    }
    else if (currentPage == 2){
        bigText.innerHTML = "Add both digits together to get a new Number.";
    }
    else if(currentPage == 3){
        bigText.innerHTML = "Subtract your new number from the original number.";
    }
    else if (currentPage == 4){
        bigText.innerHTML = "Symbols go here";
    }
    else if (currentPage == 5){
        bigText.innerHTML = "your symbol sir/madame.";
    }
}

renderState();

