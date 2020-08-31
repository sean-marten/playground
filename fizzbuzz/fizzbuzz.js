$(document).ready(function() {
    var arr = [13, 14, 15, 16, 17, 18, 19 ,20];
    for (i = 0; i < arr.length; i++) {
        var divBy3 = arr[i] % 3;
        var divBy5 = arr[i] % 5;
        if ((divBy3 === 0) && (divBy5 === 0)) {
            console.log("fizz buzz");
        } else if (divBy5 === 0) {
            console.log("buzz");
        } else if (divBy3 === 0) {
            console.log("fizz");
        } else {
            console.log(arr[i]);
        }
    }
})