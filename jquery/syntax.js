// Loops through all of the lis in the html
$("li").each();

// In order to add an event listener...
$(".btn").on("click", function () {
  alert("yeet");
});

// Event delegation:
$(".btn").on("click", function () {
    alert("yeet");
    const $btn = $("<button>").text("yolo").addClass("btn");
    $drinks.append($btn);
  });

// The button that gets added, do not work, this is because, our anchor (the yolo button), did not exist when the onclick event handler was rendered, so the event handler essentially does not get "attached" to the yolo button

// To do this properly
$(document).on('click', '.btn') // This now lets us target all buttons on the document, if they are added now or in the future