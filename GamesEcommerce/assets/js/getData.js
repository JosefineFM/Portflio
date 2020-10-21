function loadData() {


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            gamesData = JSON.parse(this.responseText)
            let output = '';
            let outputTopGames = '';
            let outputNewGames = '';

            for (i in gamesData) {

                let gameImg = gamesData[i].image;
                let gamePrice = gamesData[i].price;
                let gameId = gamesData[i].id;
                let gameTitle = gamesData[i].title;
                let gamefeatured = gamesData[i].featured;
                let topGames = gamesData[i].topGames;
                let newGames = gamesData[i].newGame;
                let gameRelease = gamesData[i].release;

                obj = {
                    fn: gameId,
                    ln: gameTitle
                };


                if (gamefeatured === 1) { // console.log("Game Title: " + gameTitle)


                    output += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="AddToShoppingCart( \'' + gameId + '\',\'' + gameTitle + '\')">Add to Cart</button>' + 
                    '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }

                if (topGames === 1) {
                    outputTopGames += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="AddToShoppingCart( \'' + gameId + '\',\'' + gameTitle + '\')">Add to Cart</button>' + 
                    
                    '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }

                if (newGames === 1) {
                    outputNewGames += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price"> Release: ' + gameRelease + '</span>' + ' <span class="game__price">' + gamePrice + '</span>' + '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }


            }
            document.getElementById('game').innerHTML = output;
            document.getElementById('topGames').innerHTML = outputTopGames;
            document.getElementById('newGames').innerHTML = outputNewGames;


        }
    }
    xhr.send();
    // console.log(localStorage.getItem('shoppingCartItems'))
    cart = JSON.parse(localStorage.getItem('shoppingCartItems'));

    document.getElementById('cart-count').innerHTML = cart.length;
}

function AddToShoppingCart(gameId, gameTitle) { // Get the existing data
    let items = {
        id: gameId,
        title: gameTitle,
    };

    cart = [];

    // Parse the serialized data back into an aray of objects
    cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];

    // Push the new data (whether it be an object or anything else) onto the array
    cart.push(items);

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('shoppingCartItems', JSON.stringify(cart));
    
    document.getElementById('cart-count').innerHTML = cart.length;

}
