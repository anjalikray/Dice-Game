// dice1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);


// dice2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

// if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
// if player 2 wins
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
// if none of them wins
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}

// refresh button
function refresh(){
    window.location.reload("Refresh Here")
  }
