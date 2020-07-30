// These are essentially event handlers
document.getElementById('main').onclick = function() {
    alert('hello world');
}

// This is more flexible, goes beyond just clicks
document.getElementById('main').addEventListener('click', event => {
    console.log('');
})