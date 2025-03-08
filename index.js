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
var timer = 30;

startButton.textContent = "Start Quiz!";
quizDiv.appendChild(startButton);

startButton.addEventListener("click", showQuestions);

function showQuestions() {
    console.log("clicked");

    quizDiv.innerHTML = "";
    for (i = 0; i < questionsArr.length; i++) {
        questionPara.textContent = questionsArr[i].question;
        // quiz.options.forEach((choices) => {
        //     // console.log(choices);
        //     answerButton.textContent = choices;
        //     answerDiv.appendChild(answerButton);
        // });
        quizDiv.append(questionPara, answerDiv, timerPara);
    }
    // questionsArr.forEach((quiz) => {
    //     // console.log(quiz.question);

    // });
}
