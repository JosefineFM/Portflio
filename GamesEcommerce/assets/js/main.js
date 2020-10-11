let cart = 1;
var gamesIds = [];
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
            document.getElementById('nav-menu').style.width = "100%";
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

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