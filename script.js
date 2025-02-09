const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "Who developed JavaScript?", options: ["Brendan Eich", "Linus Torvalds", "Dennis Ritchie", "James Gosling"], answer: "Brendan Eich" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultEl.innerHTML = `<h3>You scored ${score} out of ${quizData.length}</h3>`;
    optionsEl.innerHTML = "";
    questionEl.innerHTML = "Quiz Completed!";
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
});

loadQuestion();
