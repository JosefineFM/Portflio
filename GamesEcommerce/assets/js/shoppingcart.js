var cart = 1;
function shoppingCart(){

    document.getElementById('cart-count').innerHTML = cart++;

    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.shoppingCart){
            sessionStorage.shoppingCart = Number(sessionStorage.shoppingCart)+1;
        } else {
            sessionStorage.shoppingCart = 1;
        }
    }
    console.log(sessionStorage.shoppingCart)
}

