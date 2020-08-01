// const $container = document.getElementById('container');
const $container = $('.container');
// document.querySelector('.red').textContent = 'Whatever';
$('.red')
  .text('Whatever')
  .text('Something else')
  .css('color', 'red');
// Asynchronous JavaScript and XML
/*
* GET   Requesting data
* POST   Sending data for your server to save
* DELETE  delete data from your database
* PUT     update multiple properties on one or more multiple data
* PATCH    updating 1 property on one data
* */
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/comments',
  method: 'GET'
}).then(function(response) {
  console.log(response);
  response.forEach(function(comment) {
    const $p1 = $('<p>').text(comment.email);
    const $p2 = $('<p>').text(comment.body);
    $container.append($p1, $p2);
  })
})