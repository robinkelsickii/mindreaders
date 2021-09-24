var page1 = document.getElementById('view1');
var page2 = document.getElementById('veiw2');
var page3 = document.getElementById('veiw3');
var page4 = document.getElementById('veiw4');
var page4 = document.getElementById('veiw5');
var goGoGo = document.getElementById('goGo');
var resetBtn = document.getElementsByClassName('btn btn-secondary');

function go() {
    page1.classList.add('d-none');
    page2.classList.remove('d-none');



}

goGoGo.addEventListener('click', () => {
    go(); 
})

// function reset() {
    // if (page1.classList.contains('d-none')) {
        // page1.classList.remove('d-none');
//     }
// }

// resetBtn.addEventListener('click', () => {
    // reset();
// })






// page1.classList.add('d-none');
// element.classList.
    // 'add', 'remove', contains