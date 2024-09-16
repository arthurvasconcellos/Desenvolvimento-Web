const questions = [
    {
        question: "Quantas títulos mundiais o piloto Lewis Hamilton?",
        answers: ["4", "5", "6", "7"],
        correctAnswer: 3
    },
    {
        question: "Em que ano o piloto Ayrton Senna faleceu?",
        answers: ["1993", "1993", "1994", "1995"],
        correctAnswer: 3
    },
    {
        question: "Qual a nacionaloidade do piloto Max Verstappen?",
        answers: [
            "Alemão",
            "Belga",
            "Holandês",
            "Luxemburguesa"
        ],
        correctAnswer: 2
    },
    {
        question: "Qual o melhor piloto da escuderia McLaren atualmente?",
        answers: [
            "Lando Norris",
            "Oscar Piastri",
        ],
        correctAnswer: 0
    },
    {
        question: "Há quanto tempo o piloto Sérgio Perez não vence uma corrida?",
        answers: [
            "3 meses",
            "5 meses",
            "7 meses",
            "Mais de um ano",
        ],
        correctAnswer: 3
    },
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;