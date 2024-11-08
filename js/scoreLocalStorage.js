// document.addEventListener("DOMContentLoaded", function() {
//     const displayScoreElement = document.getElementById('displayScore');
//     const finalScore = localStorage.getItem('finalScore');

//     if (finalScore !== null) {
//         displayScoreElement.textContent = finalScore;
//     }

    
// });


// let result = document.getElementById('result')



// if (displayScore > 0 && displayScore <= 2){
//     result.textContent = "You won!";
// }



document.addEventListener("DOMContentLoaded", function() {
    const displayScoreElement = document.getElementById('displayScore');
    const finalScore = localStorage.getItem('finalScore');

    if (finalScore !== null) {
        displayScoreElement.textContent = finalScore;

        const score = parseInt(finalScore, 10);
        const result = document.getElementById('result');

        if (score <= 2) {
            result.textContent = "Niveau A1";
        } else if (score === 6) {
            result.textContent = "Niveau B1";
        } else if (score === 8) {
            result.textContent = "Niveau B2";
        } else if (score === 9) {
            result.textContent = "Niveau C1";
        } else if (score === 10) {
            result.textContent = "Niveau C2";
        } else {
            result.textContent = "Score non reconnu pour un niveau.";
        }
    }
});document.addEventListener("DOMContentLoaded", function() {
    const displayScoreElement = document.getElementById('displayScore');
    const finalScore = localStorage.getItem('finalScore');

    if (finalScore !== null) {
        displayScoreElement.textContent = finalScore;

        const score = parseInt(finalScore, 10);
        const result = document.getElementById('result');

        if (score <= 2) {
            result.textContent = "Niveau A1";
        } else if (score === 6) {
            result.textContent = "Niveau B1";
        } else if (score === 8) {
            result.textContent = "Niveau B2";
        } else if (score === 9) {
            result.textContent = "Niveau C1";
        } else if (score === 10) {
            result.textContent = "Niveau C2";
        } else {
            result.textContent = "Score non reconnu pour un niveau.";
        }
    }
});