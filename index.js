// Your code here

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

console.log(quizDiv);

var startButton = document.createElement("button");
var questionPara = document.createElement("p");
var answerDiv = document.createElement("div");
var answerButton = document.createElement("button");
var timerPara = document.createElement("p");
var timer;
var correct = 0;
var questionNumber = 0;

var questionAnswer = questionsArr[questionNumber].answer;
startButton.textContent = "Start Quiz!";
quizDiv.appendChild(startButton);

startButton.addEventListener("click", showQuestions);

function showQuestions() {
    console.log("clicked");
    timer = 30;
    const intervalId = setInterval(function () {
        timerPara.textContent = timer;

        console.log("timer:", timer);

        if (timer <= 0) {
            clearInterval(intervalId); // Stop after 5 iterations
            console.log("Interval stopped.");
            showQuestions();
        }
        timer--;
    }, 1000);
    quizDiv.innerHTML = "";
    answerDiv.innerHTML = "";
    if (questionNumber < questionsArr.length) {
        questionPara.textContent = questionsArr[questionNumber].question;
        questionAnswer = questionsArr[questionNumber].answer;

        questionsArr[questionNumber].options.forEach((choice) => {
            // console.log(choice);

            answerButton = document.createElement("button");
            answerButton.textContent = choice;
            answerDiv.appendChild(answerButton);

            answerButton.addEventListener("click", () => {
                // console.log(questionAnswer);
                if (choice == questionAnswer) {
                    console.log(choice + " is correct");
                    questionNumber++;
                    correct++;
                    showQuestions();
                } else {
                }
                questionNumber++;
                showQuestions();
            });
        });
    } else {
        var score = (correct / questionsArr.length) * 100;
        questionPara.textContent = `${score}%`;
    }

    quizDiv.append(questionPara, answerDiv, timerPara);

    // questionsArr.forEach((quiz) => {
    //     // console.log(quiz.question);

    // });
}
