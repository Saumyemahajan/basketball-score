let scoreHome = document.getElementById("score-home");
let score = 0;

function increasehome1() {
    score += 1;
    scoreHome.textContent = score;
}
function increasehome2() {
    score += 2;
    scoreHome.textContent = score;
}
function increasehome3() {
    score += 3;
    scoreHome.textContent = score;
}

function reset(){
    score = 0;
    scoreHome.textContent = score;
    scoreGuest.textContent = score;
}

let scoreGuest = document.getElementById("score-guest");
let score2 = 0;

function increaseguest1() {
    score2 += 1;
    scoreGuest.textContent = score2;
}
function increaseguest2() {
    score2 += 2;
    scoreGuest.textContent = score2;
}
function increaseguest3() {
    score2 += 3;
    scoreGuest.textContent = score2;
}