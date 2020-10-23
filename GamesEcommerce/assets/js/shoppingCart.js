var id;
var result
var cart;
let gameTitle;
cart;

function loadShoppingCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCartItems'))

    if (!Array.isArray(cart) || ! cart.length) {
        console.log("test")
    } else {

        cart.sort((a, b) => (a.id > b.id) ? 1 : -1)
        document.getElementById('cart-count').innerHTML = cart.length;


        let output = '';


        result = [... cart.reduce(
                (mp, o) => {
                    if (!mp.has(o.title)) 
                        mp.set(o.title, {
                            ...o,
                            count: 0
                        });
                    


                    mp.get(o.title).count ++;
                    return mp;
                },
                new Map
            ).values()];


        for (var i in result) {
            gameTitle = result[i].title;
            id = result[i].id;
            count = result[i].count;

            output += '<p>' + gameTitle + '</p>' + '<button onclick="pluss( \'' + id + '\',\'' + gameTitle + '\')"">+</button>' + '<p>' + count + '</p>' + '<button onclick="minus(  \'' + id + '\',\'' + gameTitle + '\')"">-</button>'
        }
        document.getElementById('show-cart').innerHTML = output;

        localStorage.setItem('shoppingCartItems', JSON.stringify(cart));
    }
}

function pluss(id, gameTitle) {
    var cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];

    let items = {
        id: id,
        title: gameTitle
    };

    cart = [];

    // Parse the serialized data back into an aray of objects
    cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];

    cart.sort((a, b) => (a.id > b.id) ? 1 : -1)

    // Push the new data (whether it be an object or anything else) onto the array
    cart.push(items);

    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('shoppingCartItems', JSON.stringify(cart));

    window.location.reload();
}

function minus(id, gameTitle) {
    cart = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];

    for (var i in cart) {

        if (id == cart[i].id || cart[i].title == gameTitle) {
            cart.findIndex(i => i.id === gameTitle);
            console.log(i)
            cart.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('shoppingCartItems', JSON.stringify(cart));

    window.location.reload();
}

function clearCart() {
    localStorage.removeItem('shoppingCartItems');
    window.location.reload();

}

function toCheckout(){
    location.replace("checkout.html")
}