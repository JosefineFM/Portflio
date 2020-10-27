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

function readMore(gamesId) { // Get the existing data
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("readMoreId", gamesId);
  } 

  location.replace("readMore.html")
}

var slideIndex = 0;
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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 40000); // Change image every 2 seconds
}

function readAboutAllDlcs(){
  sessionStorage.removeItem('readMoreAboutDLC');

  location.replace("dlc.html")
}

function readMoreAboutDLC(dlcId) { 
  console.log(dlcId)
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    sessionStorage.setItem("readMoreAboutDLC", dlcId);
  } 

  location.replace("dlc.html")
}
