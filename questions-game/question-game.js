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
questionArray.forEach(function(questionArray) {
    userInput = prompt (questionArray.q).toLowerCase();
    if (userInput === questionArray.answer) {
        alert('Correct');
        score++;
    } else {
        alert('Incorrect');
    }
    });
alert("You scored " + score + " out of 10!");

// If you want to see what runs faster, you can use console.time and console.timeEnd

function questionsFor() {
    for (i = 0; i < questionArray.length; i++) {
    console.log(questionArray[i].q)
}
}

function questionsForEach() {
    questionArray.forEach(function(questionArray){
        console.log(questionArray.q)
    })
    }