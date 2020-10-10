function getAboutTheGame() {

    var gamesId = sessionStorage.getItem("readMoreId"); const xhr = new XMLHttpRequest();
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
                    ' <article>' + 
                    ' <img src="' + gameImg + '" alt="" class="game__img"></img>' + 
                    ' <span>' + gameTitle + '</span>' + 
                    ' <span>' + gamePrice + '</span>' + 
                    ' <span>' +  gamesData[i].developer + '</span>' + 
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
