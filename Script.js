
const questions = [
    {
        question: "Which language creates web page structure?",
        options: ["CSS", "HTML", "Python", "Java"],
        answer: 1
    },
    {
        question: "Which language styles a web page?",
        options: ["HTML", "C++", "CSS", "SQL"],
        answer: 2
    },
    {
        question: "Which language adds interactivity?",
        options: ["JavaScript", "HTML", "CSS", "XML"],
        answer: 0
    },
    {
        question: "Which tag creates a paragraph in HTML?",
        options: ["<h1>", "<p>", "<br>", "<img>"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("welcome").hidden = true;
    document.getElementById("startBtn").hidden = true;
    document.getElementById("resultArea").hidden = true;
    document.getElementById("quizArea").hidden = false;

    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("progress").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    document.getElementById("question").textContent = q.question;

    const optionsBox = document.getElementById("options");
    optionsBox.replaceChildren();

    q.options.forEach((option, index) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        label.append(radio, document.createTextNode(option));
        optionsBox.appendChild(label);
    });

    document.getElementById("nextBtn").textContent =
        currentQuestion === questions.length - 1
        ? "Submit Quiz" : "Next";
}

function nextQuestion() {
    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (Number(selected.value) ===
        questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizArea").hidden = true;
    document.getElementById("resultArea").hidden = false;
    document.getElementById("score").textContent =
        "Your Score: " + score + " / " + questions.length;
}

function restartQuiz() {
    document.getElementById("resultArea").hidden = true;
    document.getElementById("welcome").hidden = false;
    document.getElementById("startBtn").hidden = false;
    document.getElementById("startBtn").textContent = "Start Quiz";
                  }
      
