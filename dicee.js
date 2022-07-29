// dice 1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImg1;

var image1 = document.querySelectorAll ("img")[0];

image1.setAttribute("src", randomImgSrc);







// dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSrc2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSrc2);


// function of dice

if (randomNumber1 > randomNumber2){
document.querySelector ("h1").innerHTML = "Player 1 is the winner!";

} else if (randomNumber1 < randomNumber2){
document.querySelector ("h1").innerHTML = "Player 2 is the winner!";

}else {
document.querySelector("h1").innerHTML = "It's a draw!";
}
