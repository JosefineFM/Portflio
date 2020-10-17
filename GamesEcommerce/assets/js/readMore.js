function getAboutTheGame() {
    var existingInLocalStorage = localStorage.getItem('shoppingCartArray');
    var localStorageCount = Array.from(existingInLocalStorage.split(","))

    document.getElementById('cart-count').innerHTML = localStorageCount.length;
    
    var gamesId = sessionStorage.getItem("readMoreId"); 

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/data/abouteTheGames.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            let gamesData = JSON.parse(this.responseText) 
            let output = '';

            
            for(i in gamesData) {
                // console.log(gamesData[i].image)
                let gameImg = gamesData[i].image;
                let gameTitle = gamesData[i].title;
                let gamePrice = gamesData[i].price;
                let gameId = gamesData[i].id;

                if(gameId == gamesId) {
                    // console.log("the if statment: " + JSON.stringify(gamesData[i].title))
                    output += 
                    ' <article class="aboutTheGame">' + 
                    ' <img src="' + gameImg + '" alt="" class="aboutTheGame__img"></img>' + 
                    ' <h2 class="game__name">' + gameTitle + '</h2>' + 
                    ' <h3 class="game__price">' + gamePrice + '</h3>' + 
                    ' <p class="description"> Developer: ' +  gamesData[i].developer + '</p>' + 
                '<button class="button-light games__button" onclick="shoppingCart( ' + gameId + ')"">Add to Cart</button>' + 
                '</article>'
                    
                
                }
                document.getElementById('game').innerHTML = output;

            }

        }
    }
    xhr.send();
    // console.log("readMore html: " + JSON.parse(gamesId));
}

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