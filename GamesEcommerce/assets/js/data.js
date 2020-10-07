var cart = 1;
var personObject = { game: "Horizen Zero Dawn™ Complete Edition" };
var productId = [];


function loadData(productId) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'assets/data/games.json', true);

    xhr.onload = function () {
        if (this.status == 200) {
            let gamesData = JSON.parse(this.responseText)
            console.log(gamesData);

            let output = '';

            for (i in gamesData) {
                output += ' <article class="game">' + 
                ' <img src="' + gamesData[i].image + '" alt="" class="game__img"></img>' + 
                ' <span class="game__name">' + gamesData[i].title + 
                '</span>' + ' <span class="game__price">' + gamesData[i].price + '</span>' + 
                '<button class="button-light add-to-cart" onclick="shoppingCart( '+ gamesData[i].id +')"">Add to Cart</button>' +
                '</article>'
            }
            document.getElementById('game').innerHTML = output;
        }
    }
    xhr.send();
}


function shoppingCart(productId) { 
    console.log("Product in shopping cart: " + productId);
    document.getElementById('cart-count').innerHTML = cart++;

    // Save id in sessionStorage - shoppingcart
    // Send id to cart page

    // popup window trigger when product is added to cart

}
