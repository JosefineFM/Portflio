var gameId
var current = null;
var cnt = 0;
var gamesId = [];

function loadShoppingCart() {
    existing = localStorage.getItem('shoppingCartArray');
    console.log(existing)
    existing = existing ? existing.split(',') : [];
    existing.sort();

    let output = '';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function (gameId) {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)
            console.log(gamesData)
            for (i in gamesData) {
                var gameId = gamesData[i].id;
                let gameTitle = gamesData[i].title;

                for (var i = -1; i < existing.length; i++) {
                    if (existing[i] != current) {
                        if (cnt > -1) {
                            if (gameId === current) {
                                output += ' <article class="game">' + ' <span class="game__title">' + gameTitle + '</span>' + '<button onclick="plus(' + gameId + ')">+</button>' + '<span>' + cnt + '</span>' + '<button onclick="minus(' + gameId + ')">-</button>' + '</article>'

                            }

                        }
                        current = existing[i];
                        cnt = 1;
                    } else {
                        cnt++;
                    }
                }
            }
            document.getElementById('show-cart').innerHTML = output;

        }

    }
    xhr.send();

}

function plus(gameId) {
    var existing = localStorage.getItem('shoppingCartArray', gameId);

    for (var i = 0; i < existing.length; i++) {
        if (existing[i] != current) {
            if (cnt > 0) {

                if (current == gameId) {
                    existing = existing ? existing.split(',') : [];
                    existing.push(gameId.toString());
                    localStorage.setItem('shoppingCartArray', existing);
                    window.location.reload();
                }

            }
            current = existing[i];
            cnt = 1;
        } else {
            cnt++;
        }

    }
}

var existing = localStorage.getItem('shoppingCartArray');

function minus(gameId) {
    var gamesId = gameId + "";
    var findIndexOf = existing.indexOf(gamesId);
    existing.splice(findIndexOf,  1);
    
    

    localStorage.setItem('shoppingCartArray', existing);

    window.location.reload();


    // finde the index of
}
// remove from localStorage
// add to cart
// remove from cart
