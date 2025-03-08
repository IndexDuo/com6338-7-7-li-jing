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

quizDiv.setAttribute
