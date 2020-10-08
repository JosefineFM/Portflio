let cart = 1;
var gamesIds = [];
var gameId = "";


function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)
            
            
            let output = '';
            
            for (i in gamesData) {

                gameImg = gamesData[i].image;
                let gameTitle = gamesData[i].title;
                let gamePrice = gamesData[i].price;
                let gameId = gamesData[i].id;

                output += ' <article class="game">' + 
                ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + 
                ' <span class="game__name">' + gameTitle + '</span>' + 
                ' <span class="game__price">' + gamePrice + '</span>' + 
                '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + 
                '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + 
                '</article>'
            }
            document.getElementById('game').innerHTML = output;
        }
    }
    xhr.send();
}


function shoppingCart(gamesIds) { // Get the existing data
    var existing = localStorage.getItem('gamesIdsArray', gamesIds);
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];

    // Add new data to localStorage Array
    existing.push(gamesIds);

    // Save back to localStorage
    localStorage.setItem('gamesIdsArray', existing.toString());

    document.getElementById('cart-count').innerHTML = cart++;
}

function readMore(gamesIds) { // Get the existing data
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("readMoreId", gamesIds);
  } 
}

/* --------------------- See what is in the shoppingCart -------------------- */

function getAboutTheGame(){
    console.log("readMore html: " + sessionStorage.getItem("readMoreId"));
    document.getElementById("result").innerHTML = sessionStorage.getItem("readMoreId");
}