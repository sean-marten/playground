// Only works on objects and arrays
const { name, thumb_url, tracker_count, ...the_rest} = resp; // This is the object
// This creates a variable for each thing in the curly brackets,
// It finds the same property in the object on the right

// you can grab the rest from the spread operator

// You can also deconstruct directly in an argument

$.ajax({
    url: url,
    method: method,
}).then(function({name, thumb_url, tracker_count}) {
    // do stuff wiht it
})