var score = 0;
var questionArray = [
    {
        q: "What color is the sky?",
        answer: "blue"
    },
    {
        q: "What color is fresh grass?",
        answer: "green"
    },
    {
        q: "What planet are we on?",
        answer: "earth"
    },
    {
        q: "What is the red planet?",
        answer: "mars"
    },
    {
        q: "What written language is this?",
        answer: "english"
    },
    {
        q: "What day of the week is it?",
        answer: "saturday"
    },
    {
        q: "How many days of the week are there?",
        answer: "7"
    },
    {
        q: "How many months are there in a year?",
        answer: "12"
    },
    {
        q: "Is a tomato a fruit?",
        answer: "yes"
    },
    {
        q: "Is a carrot a vegetable?",
        answer: "yes"
    },
];
​
var userInput = [];
for (i = 0; i < questionArray.length; i++) {
userInput = prompt (questionArray[i].q).toLowerCase();
if (userInput===questionArray[i].answer) {
    alert('Correct');
    score++;
} else {
    alert('Incorrect');
}
}
alert("You scored " + score + " out of 10!");