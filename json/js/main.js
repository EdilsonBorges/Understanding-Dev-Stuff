

var pageCounter = 1;
var animalContaniner = document.getElementById('animal-info');
var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log('we connected to the server, but it returned na error')
        }
    };

    ourRequest.onerror = function() {
        console.log('connection error');
    }

    ourRequest.send(); 
    pageCounter++;
    if(pageCounter > 3) {
        btn.classList.add('hide-me');
    }
});

function renderHTML(data) {
    var htmlString = '';
    for(i = 0; i < data.length; i++) {
        htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes `; // using ES6 template string
        for (j = 0; j < data[i].foods.likes.length; j++) {
            if(j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += ' and ' + data[i].foods.likes[j];
            }
        }
        htmlString += ' and dislikes ';
        for (j = 0; j < data[i].foods.dislikes.length; j++) {
            if(j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += ' and ' + data[i].foods.dislikes[j];
            }
        }    
        htmlString += '.</p>';
    }
    animalContaniner.insertAdjacentHTML('beforeend', htmlString);
}

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
// AJAX (Asynchronous JavaScript And XML)
// JSON has kind of replace XML as a format data in many places

// (4)
// http://www.filltext.com/

// (5)
// handlebars.js