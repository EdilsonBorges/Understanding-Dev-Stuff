/*
// (1)
var myCat = {
    "name" : "Meowsalot",
    "species" : "cat",
    "favFood" : "tuna"
}
myCat.favFood; // accessing data from objects

// (2)
var myFavColors = ["blue","green","purple"];
myFavColors[1] // accessing data from array


// (3)
var thePets = [
    {
    "name" : "Meowsalot",
    "species" : "cat",
    "favFood" : "tuna"
    },
    {
    "name" : "Barky",
    "species" : "dog",
    "favFood" : "carrots"
    }
] // single variable contains an array of two objects, which is a JSON (Java Script Object Notation)

thePets[1].favFood;
*/

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    var ourData = ourRequest.responseText;
};
ourRequest.send();