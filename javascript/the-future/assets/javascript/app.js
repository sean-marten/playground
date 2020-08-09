$(document).ready(function () {
  /*
* HTTP VERBS define what we are trying to request for
* and what type of request we are making
*
* GET - I am requesting data from some API so I can use it for myself
* POST - I am sending data to some API for them to save
* PATCH - I am trying to update some data, but only 1 property of some data
  Example -    { name: 'Manny', age: 21 }  =>   { name: 'Emmanuel', age: 21 }
  PUT -  I am trying to update more than 1 property and maybe more than 1 data in 1 request.
  DELETE - I am trying to delete some data
* */
  // AJAX request
  // Asynchronous JavaScript and XML
  // Asynchronous - something is going to take some time to happen, won't get data instantly
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon?limit=150",
    method: "GET",
  }).then(function (resp) {
    $.ajax({
        url: resp.results[0].url,
        method: "GET",
    }).then(function(resp) {
        console.log(resp)
    })
  });
});
