var bigText = document.getElementById('bigText');
var go = document.getElementById('go');
var resetBtn = document.getElementById('resetBtn');
var next = document.getElementById('next');
var littleText = document.getElementById('littleText');
 

const symbol = ['$', '%', '^', '&', '!', '(', ')', '*', '#', '@'];

let currentPage = 0;

function nextPage() {
    currentPage++;
    renderState();
    console.log("Hello");
}
go.addEventListener('click', nextPage());
nextReveal.addEventListener('click', nextPage());
reveal.addEventListener('click', nextPage()); 

function res() {
    currentPage = 0;
    renderState();
}
resetBtn.addEventListener('click', res());

function random() {
    let answer = "";
    let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
    for (i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            answer = answer + i + ": " + randomSymbol;
        }
        else {
            var notNine = symbol[Math.floor(Math.random() * symbol.length)];
            answer = answer + i + ": " + notNine;
            yourSymbol = randomSymbol;
        }
    }
    return answer;
}






function renderState() {
    if (currentPage == 0) {
        bigText.innerHTML = "I can read your mind.";
        littleText.style.visibility = "hidden";
        next.style.visibility = "hidden";
        go.style.visibility = "visible";
        resetBtn.style.visibility = "hidden";
    }
    else if (currentPage == 1) {
        bigText.innerHTML = "Pick a number from 01-99.";
        littleText.style.visibility = "visible";
        next.style.visibility = "visible";
        go.style.visibility = "hidden";
        next.innerHTML = "Next";
        littleText.innerHTML = "Once you have your number click Next.";
        resetBtn.style.visibility = "visible";
    }
    else if (currentPage == 2) {
        bigText.innerHTML = "Add both digits together to get a new Number.";
        littleText.innerHTML = "EX; 14=1+4=5" + "<br/>" + "Click Next to proceed.";
    }
    else if (currentPage == 3) {
        bigText.innerHTML = "Subtract your new number from the original number.";
        littleText.innerHTML = "EX:14-5=9" + "<br/>" + "Click Next to proceed";
    }
    else if (currentPage == 4) {
        bigText.innerHTML = random();
        littleText.innerHTML = "Find your new number" + "<br/>" + "Note the symbol next to the number";
        next.innerHTML = "Reveal"; 
    }
    else if (currentPage == 5) {
        bigText.innerHTML = "your symbol sir/madame." + "<br/>" + yourSymbol;
        littleText.innerHTML = "Your symbol is" + yourSymbol;
        next.style.visibility = "hidden"; 
    }
}

function init() {
    nextPage();
    renderState();
    res();
}

