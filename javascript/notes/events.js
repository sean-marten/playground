// These are essentially event handlers
document.getElementById('main').onclick = function() {
    alert('hello world');
}

// This is more flexible, goes beyond just clicks
document.getElementById('main').addEventListener('click', event => {
    console.log(event);
})
// The event will give us information about what happened on the page

document.addEventListener('keydown', event => {
    console.log(event);
    console.log('hello I keyed something');
    if (event.key === 's'){
        console.log('sean');
    }
    else {
        console.log('nope');
    }
})

// setInterval is a function that takes 2 inputs, a function to call when the time is up and the time, in milliseconds
// To easily convert to minutes, hours, etc., multiply it by 60...

const timerInterval = setInterval(someSortOfEvent, 1000)

// Only stops when you clear the interval of the function that is called 

clearInterval(timerInterval);

// Default behavior of javascript for form submission is it tries to push your info to a web page and it will attempt to refresh

event.preventDefault(); // This prevents the page refreshing

var submitEl = document.querySelector('submit');

submitEl.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
});