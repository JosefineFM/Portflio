let cart = 1;
var gamesId = [];
var gameId = "";


/* -------------------------------------------------------------------------- */
/*                                  MENU SHOW                                 */
/* -------------------------------------------------------------------------- */

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if (toggle && nav) {
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('nav-toggle', 'nav-menu')

function shoppingCart(gamesId) { // Get the existing data
    

    var existing = localStorage.getItem('shoppingCartArray', gamesId);
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];

    // Add new data to localStorage Array
    existing.push(gamesId);

    // Save back to localStorage
    localStorage.setItem('shoppingCartArray', existing.toString());

    document.getElementById('cart-count').innerHTML = cart++;

    var existingInLocalStorage = localStorage.getItem('shoppingCartArray');
    var localStorageCount = Array.from(existingInLocalStorage.split(","))

    document.getElementById('cart-count').innerHTML = localStorageCount.length;
}

function readMore(gamesId) { // Get the existing data
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("readMoreId", gamesId);
  } 

  location.replace("readMore.html")
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}