// Usually standard to have it wait for the page to be ready
$(document).ready(function(){
    const $favoriteFood = $(".favoriteFood");

    const favoriteFoods = [
        {
            name: "Sushi",
            hasFish: true
        },
        {
            name: "Pizza",
            hasFish: false
        },
        {
            name: "Ramen",
            hasFish: false
        }
    ];

    for (let i = 0; i < favoriteFoods.length; i++) {
        const $li = $('<li>').text(favoriteFoods[i].name);
        if (favoriteFoods[i].hasFish) {
            $li.css('color', 'red');
        }
        else {
            $li.css('color', 'blue')
        }

        $favoriteFood.append($li);
    }
});