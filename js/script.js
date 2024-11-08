const questions = [
    {
        question: "Quel est le synonyme de \"difficile\" ?",
        answers: [
            {Text: "Facile", correct: false},
            {Text: "Simple", correct: false},
            {Text: "Compliqué", correct: true},
            {Text: "Agréable", correct: false},
        ]
    },
    {
        question: "Je vais ___ cinéma ce soir.",
        answers: [
            {Text: " à le", correct: false},
            {Text: "au", correct: true},
            {Text: "en le", correct: false},
            {Text: "aux", correct: false},
        ]
    },
    {
        question: "Quel mot est un adjectif ?",
        answers: [
            {Text: "Chanter", correct: false},
            {Text: "Jouer", correct: false},
            {Text: "Bleu", correct: true},
            {Text: "Vite", correct: false},
        ]
    },
    {
        question: "Quelle est la bonne conjugaison de \"être\" au présent de l'indicatif, pour \"nous\" ?",
        answers: [
            {Text: "Vous êtes", correct: false},
            {Text: "Je suis", correct: false},
            {Text: "Ils sont", correct: false},
            {Text: "Nous sommes", correct: true},
        ]
    },
    {
        question: "Que signifie l'expression \"avoir le coup de foudre\" ?",
        answers: [
            {Text: "Tomber amoureux immédiatement", correct: true},
            {Text: "Perdre son emploi", correct: false},
            {Text: "Faire une grande découverte", correct: false},
            {Text: "Avoir une très mauvaise nouvelle", correct: false},
        ]
    },
    {
        question: "Complétez la phrase : \"Il faut que tu ___ tes devoirs avant de sortir.\"",
        answers: [
            {Text: "fais", correct: false},
            {Text: "fait", correct: false},
            {Text: "fasse", correct: false},
            {Text: "fasses", correct: true},
        ]
    },
    {
        question: "Quel mot est un verbe ?",
        answers: [
            {Text: "Parler", correct: true},
            {Text: "Bientôt", correct: false},
            {Text: "Très", correct: false},
            {Text: "Heureusement", correct: false},
        ]
    },
    {
        question: "Quelle phrase est au futur proche ?",
        answers: [
            {Text: "Il mange des pommes.", correct: false},
            {Text: "Il va manger des pommes.", correct: true},
            {Text: "Il mangeait des pommes", correct: false},
            {Text: "Il mangera des pommes", correct: false},
        ]
    },
    {
        question: "Complétez la phrase : \"Nous avons mangé ___ restaurant.\"",
        answers: [
            {Text: "au", correct: false},
            {Text: "à le", correct: false},
            {Text: "aux", correct: true},
            {Text: "en", correct: false},
        ]
    },
    {
        question: "Quel est l'anti-synonyme de \"heureux\" ?",
        answers: [
            {Text: "Triste", correct: true},
            {Text: "Contente", correct: false},
            {Text: "Joyeux", correct: false},
            {Text: "Satisfait", correct: false},
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let timer; 
const timeLimit = 10; 

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('currentScore').textContent = score

    
    startTimer();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); 
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}


function startTimer() {
    let timeRemaining = timeLimit;
    document.getElementById('time').innerText = timeRemaining; 
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById('time').innerText = timeRemaining; 
        if (timeRemaining <= 0) {
            clearInterval(timer); 
            selectAnswer({ target: null }); 
        }
    }, 1000);
}



function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    clearInterval(timer); 
    const selectedbtn = e.target;
    const isCorrect = selectedbtn && selectedbtn.dataset.correct === "true"; 
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    } else if (selectedbtn) {
        selectedbtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'your score is ' + score +' score out of 10';

    localStorage.setItem('finalScore', score);
}

function handelenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handelenextbutton();
    } else {
        startQuiz();
    }
});



startQuiz();