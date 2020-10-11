let cart = 1;
var gamesIds = [];
var gameId = "";

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

    var existingInLocalStorage = localStorage.getItem('gamesIdsArray');
    var localStorageCount = Array.from(existingInLocalStorage.split(","))

    document.getElementById('cart-count').innerHTML = localStorageCount.length;
}

function readMore(gamesIds) { // Get the existing data
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("readMoreId", gamesIds);
  } 

  location.replace("readMore.html")
}