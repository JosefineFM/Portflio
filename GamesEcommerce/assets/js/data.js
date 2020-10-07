let cart = 1;
var gameId = [];

function loadData() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)


            let output = '';

            for (i in gamesData) {
                output += ' <article class="game">' + 
                ' <img src="' + gamesData[i].image + '" alt="" class="game__img"></img>' + 
                ' <span class="game__name">' + gamesData[i].title + 
                '</span>' + ' <span class="game__price">' + gamesData[i].price + '</span>' + 
                '<button id="toast" class="button-light add-to-cart" onclick="shoppingCart( '+ gamesData[i].id +')"">Add to Cart</button>' +
                '</article>'
            }
            document.getElementById('game').innerHTML = output;
        }
    }
    xhr.send();
}


function shoppingCart(gameId) { 
    
        // Get the existing data
        var existing = localStorage.getItem('gameIdArray', gameId);
    
        // If no existing data, create an array
        // Otherwise, convert the localStorage string to an array
        existing = existing ? existing.split(',') : [];
    
        // Add new data to localStorage Array
        existing.push(gameId);
    
        // Save back to localStorage
        localStorage.setItem('gameIdArray', existing.toString());



    
    // console.log('local storage saved data: ' + localStorageId)


    document.getElementById('cart-count').innerHTML = cart++;

    // Save id in sessionStorage - shoppingcart
    // Send id to cart page
    
}


/* --------------------- See what is in the shoppingCart -------------------- */
