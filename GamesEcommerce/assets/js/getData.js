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


                if (gamefeatured === 1) { 


                    output += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price">' + gamePrice + '</span>' + '<button class="games__button" onclick="AddToShoppingCart( \'' + gameId + '\',\'' + gameTitle + '\')">Add to Cart</button>' + '<button class="games__button" onclick="readMore( ' + gameId + ')"">Read More</button>' + '</article>'
                }

                if (topGames === 1) {
                    outputTopGames += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price">' + gamePrice + '</span>' + '<button class=" games__button" onclick="AddToShoppingCart( \'' + gameId + '\',\'' + gameTitle + '\')">Add to Cart</button>' + '<button class=" games__button" onclick="readMore( ' + gameId + ')"">Read More</button>' + '</article>'
                }

                if (newGames === 1) {
                    outputNewGames += ' <article class="game">' + ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + ' <span class="game__price"> Release: ' + gameRelease + '</span>' + ' <span class="game__price">' + gamePrice + '</span>' + '<button class=" games__button" onclick="readMore( ' + gameId + ')"">Read More</button>' + '</article>'
                }


            }
            document.getElementById('game').innerHTML = output;
            document.getElementById('topGames').innerHTML = outputTopGames;
            document.getElementById('newGames').innerHTML = outputNewGames;


        }
    }
    xhr.send();

}

function slideShowOne(){
    sessionStorage.setItem("readMoreId", 1);
}
function slideShowTwo(){
    sessionStorage.setItem("readMoreId", 3);
}

function AddToShoppingCart(gameId, gameTitle) { // Get the existing data
    let items = {
        id: gameId,
        title: gameTitle
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

function dlc() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/dlc.json', true);
    let dlcOutput = '';

    xhr.onload = function () {
        if (this.status == 200) {
            dlcData = JSON.parse(this.responseText)

            for (i in dlcData) {
                let featuredDlc = dlcData[i].featuredDlc;
                let dlcimg = dlcData[i].dlcImg;
                let dlcprice = dlcData[i].price;
                let dlcTitle = dlcData[i].title;
                let dlcId = dlcData[i].dlcId;


                if (featuredDlc === 1) {
                    dlcOutput += 
                    ' <article class="game">' + 
                    ' <img src="' + dlcimg + '" alt="" class="game__img"></img>' + 
                    ' <span class="game__price">' + dlcprice + '</span>' + 
                    '<button class=" games__button" onclick="AddToShoppingCart( \'' + dlcId + '\',\'' + dlcTitle + '\')">Add to Cart</button>' + 
                    '<button class="games__button" onclick="readMoreAboutDLC( ' + dlcId + ')"">Read More</button>' + '</article>'
                }

            }
            document.getElementById('game__dlcs').innerHTML = dlcOutput;
        }
    }
    xhr.send();

    cart = JSON.parse(localStorage.getItem('shoppingCartItems'));

    if(cart == null ){
        "empty"
    } else{

        document.getElementById('cart-count').innerHTML = cart.length;
    }}

function readAboutDlc() {
    const xhr = new XMLHttpRequest();
    let dlcoutput = '';

    cart = JSON.parse(localStorage.getItem('shoppingCartItems'));

    var sessionDlcId = sessionStorage.getItem("readMoreAboutDLC");

    if (sessionDlcId === null) {
        xhr.open('GET', 'assets/data/dlc.json', true);

        xhr.onload = function () {
            if (this.status == 200) {
                let dlcData = JSON.parse(this.responseText)

                for (i in dlcData) {
                    let dlcimg = dlcData[i].dlcImg;
                    let dlcTitle = dlcData[i].title;
                    let dlcPrice = dlcData[i].price;
                    let dlcId = dlcData[i].dlcId

                    dlcoutput += ' <article class="dlcCart">' + 
                    ' <img src="' + dlcimg + '" alt="" class="dlc_image"></img>' + 
                    '<h2 class="dlcTitle">'+ dlcTitle +'</h2>' + 
                    '<span class="dlcPrice">' + dlcPrice + '</span>' + 
                    '<button class="dlcButton" onclick="AddToShoppingCart( \'' + dlcId + '\',\'' + dlcTitle + '\')">Add to Cart</button>' + 
                    '<button class="dlcButton" onclick="readMoreAboutDLC( ' + dlcId + ')"">Read More</button>' + '</article>'
                    '</article>'
                }
                document.getElementById('dlcData').innerHTML = dlcoutput;

            }
        }

    } else {
        // const xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'assets/data/dlc.json', true);
        
        
        xhr.onload = function () {
            if (this.status == 200) {
                let dlcData = JSON.parse(this.responseText)
                
                for (i in dlcData) {
                    let dlcimg = dlcData[i].dlcImg;
                    let dlcTitle = dlcData[i].title;
                    let dlcPrice = dlcData[i].price;
                    let dlcPlot = dlcData[i].plot;
                    let dlcId = dlcData[i].dlcId
                    let dlcReleaseDate = dlcData[i].releaseDate
                    let dlcGenre = dlcData[i].Genre
                    let dlcVideo = dlcData[i].video



                    if(sessionDlcId === dlcId){

                        dlcoutput +=  
                        ' <article class="dlcCart">' + 
                        ' <img src="' + dlcimg + '" alt="" class="dlc_image"></img>' + 
                        '<h2 class="dlcTitle">'+ dlcTitle +'</h2>' + 
                        '<span class="dlcInfo">Release Date: ' + dlcReleaseDate + '</span>' + 
                        '<span class="dlcInfo">Genre:  ' + dlcGenre + '</span>' + 
                        '<span class="dlcInfo">' + dlcPlot + '</span>' + 
                        '<button class="dlcButton" onclick="AddToShoppingCart( \'' + dlcId + '\',\'' + dlcTitle + '\')">Add to Cart</button>' + 
                        '<div class="dlcVideo">'+
                        '<iframe src="' + dlcVideo+ '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
                        '</div>'+
                        
                        '</article>'

                    }
                    

                }
                document.getElementById('dlcData').innerHTML = dlcoutput;
            }
        }
    } xhr.send();
    if(cart == null ){
        "empty"
    } else{

        document.getElementById('cart-count').innerHTML = cart.length;
    }
}
