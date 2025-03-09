var questionsArr = [
    {
        question: "Who created JavaScript?",
        answer: "Brendan Eich",
        options: [
            "Linus Torvalds",
            "Brendan Eich",
            "Dan Abramov",
            "Douglas Crockford",
        ],
    },
    {
        question:
            "What is the longest that an elephant has ever lived? (That we know of)",
        answer: "86 years",
        options: ["17 years", "49 years", "86 years", "142 years"],
    },
    {
        question: "How many rings are on the Olympic flag?",
        answer: "5",
        options: ["None", "4", "5", "7"],
    },
    {
        question: "What is a tarsier?",
        answer: "A primate",
        options: ["A bird", "A lizard", "A primate"],
    },
    {
        question: "How did Spider-Man get his powers?",
        answer: "Bitten by a radioactive spider",
        options: [
            "Bitten by a radioactive spider",
            "Born with them",
            "Military experiment gone awry",
            "Woke up with them after a strange dream",
        ],
    },
];

var quizDiv = document.getElementById("quiz");

var startButton = document.createElement("button");
startButton.id = "start-quiz";
var questionPara = document.createElement("p");
var answerDiv = document.createElement("div");
var timerPara = document.createElement("p");

var timer;
var correct = 0;
var questionNumber = 0;
var intervalId;
var score;

function newGame() {
    quizDiv.innerHTML = "";

    if (score) {
        var scorePara = document.createElement("p");
        scorePara.textContent = `Previous Score: ${score}%`;
        quizDiv.appendChild(scorePara);
    }

    startButton.textContent = "Start Quiz!";
    quizDiv.appendChild(startButton);

    startButton.onclick = function () {
        questionNumber = 0;
        correct = 0;
        showQuestions();
    };
}

function showQuestions() {
    quizDiv.innerHTML = "";
    answerDiv.innerHTML = "";
    clearInterval(intervalId);

    console.log("clicked");
    timer = 30;
    timerPara.textContent = timer;

    intervalId = setInterval(function () {
        timer--;
        timerPara.textContent = timer;

        console.log("timer:", timer);

        if (timer <= 0) {
            clearInterval(intervalId);
            console.log("Time's up!");

            if (questionNumber < questionsArr.length - 1) {
                questionNumber++;
                showQuestions();
            } else {
                setScore();
                newGame();
            }
        }
    }, 1000);

    if (questionNumber < questionsArr.length) {
        questionPara.textContent = questionsArr[questionNumber].question;
        var questionAnswer = questionsArr[questionNumber].answer;

        questionsArr[questionNumber].options.forEach((choice) => {
            var answerButton = document.createElement("button");
            answerButton.textContent = choice;
            answerDiv.appendChild(answerButton);

            answerButton.addEventListener("click", () => {
                clearInterval(intervalId);
                if (choice == questionAnswer) {
                    console.log(choice + " is correct");
                    correct++;
                }
                if (questionNumber < questionsArr.length - 1) {
                    questionNumber++;
                    showQuestions();
                } else {
                    setScore();
                    newGame();
                }
            });
        });
    } else {
        setScore();
        newGame();
    }

    quizDiv.append(questionPara, answerDiv, timerPara);
}

function setScore() {
    score = Math.round((correct / questionsArr.length) * 100);
    localStorage.setItem("previous-score", score);
}

newGame();
