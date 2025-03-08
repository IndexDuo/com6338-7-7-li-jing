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
        question: "What is the longest that an elephant has ever lived? (That we know of)",
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

console.log(quizDiv);

var startButton = document.createElement("button");
startButton.id = "start-quiz";
var questionPara = document.createElement("p");
var answerDiv = document.createElement("div");
var timerPara = document.createElement("p");
var timer;
var correct = 0;
var questionNumber = 0;
var intervalId; // Store interval globally to clear it properly

startButton.textContent = "Start Quiz!";
quizDiv.appendChild(startButton);

startButton.addEventListener("click", showQuestions);

function showQuestions() {
    quizDiv.innerHTML = "";
    answerDiv.innerHTML = "";

    console.log("clicked");
    timer = 30;

    // Clear any existing interval before starting a new one
    clearInterval(intervalId);

    intervalId = setInterval(function () {
        timerPara.textContent = timer;
        console.log("timer:", timer);

        if (timer <= 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0
            console.log("Interval stopped.");
            questionNumber++;
            showQuestions();
        }
        timer--;
    }, 1000);

    if (questionNumber < questionsArr.length) {
        questionPara.textContent = questionsArr[questionNumber].question;
        let questionAnswer = questionsArr[questionNumber].answer;

        questionsArr[questionNumber].options.forEach((choice) => {
            let answerButton = document.createElement("button");
            answerButton.textContent = choice;
            answerDiv.appendChild(answerButton);

            answerButton.addEventListener("click", () => {
                clearInterval(intervalId); // Stop current timer
                timer = 30; // Reset the timer for the next question

                if (choice == questionAnswer) {
                    console.log(choice + " is correct");
                    correct++;
                }
                questionNumber++;
                showQuestions();
            });
        });
    } else {
        clearInterval(intervalId); // Stop timer when quiz ends
        var score = (correct / questionsArr.length) * 100;
        quizDiv.innerHTML = `<p>Your score: ${score}%</p>`;

        // Restart button
        var restartButton = document.createElement("button");
        restartButton.id = "start-quiz";
        restartButton.textContent = "Start Quiz!";
        restartButton.addEventListener("click", () => {
            questionNumber = 0;
            correct = 0;
            showQuestions();
        });

        quizDiv.appendChild(restartButton);

        localStorage.setItem("previous-score", score);
    }

    quizDiv.append(questionPara, answerDiv, timerPara);
}
