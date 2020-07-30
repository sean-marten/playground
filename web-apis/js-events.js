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