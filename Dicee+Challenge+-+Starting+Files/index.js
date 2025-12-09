// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Select the left <img> element
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the left <img> element
var randomDiceImage = "dice" + randomNumber2 + ".png"
var randomImageSource2 = "images/" + randomDiceImage;
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}






