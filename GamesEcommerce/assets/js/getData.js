function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)
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
                

                if(gamefeatured === 1){
                    output += ' <article class="game">' + 
                    ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                    ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + 
                    '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + 
                    '</article>'
                }

                if(topGames === 1){
                    outputTopGames += ' <article class="game">' + 
                ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                ' <span class="game__price">' + gamePrice + '</span>' + 
                '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }
                
                if(newGames === 1) {
                    outputNewGames += ' <article class="game">' + 
                    ' <img src="' + gameImg + '" alt="" class="game__img"></img>' +
                    ' <span class="game__price"> Release: '  + gameRelease + '</span>' + 
                    ' <span class="game__price">' + gamePrice + '</span>' + 
                    '<button class="button-light games__button" onclick="readMore( ' + gameId + ')"">Red More</button>' + '</article>'
                }



            }
            document.getElementById('game').innerHTML = output;
            document.getElementById('topGames').innerHTML = outputTopGames;
            document.getElementById('newGames').innerHTML = outputNewGames;



            
        }
    }
    xhr.send();

    // var existingInLocalStorage = localStorage.getItem('shoppingCartArray');
    // var localStorageCount = Array.from(existingInLocalStorage.split(","))

    // document.getElementById('cart-count').innerHTML = localStorageCount.length;

    /* ---------------------------------- news ---------------------------------- */

}