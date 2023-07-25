var num1,num2;
num1 = Math.floor(Math.random()*6)+1;
num2 = Math.floor(Math.random()*6)+1;

if(num1>num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
const Img = document.querySelectorAll("img");
Img[0].setAttribute("src", "/images/dice"+num1+".png");
//const RightImg = document.getElementsByClassName("img2")[0];
Img[1].setAttribute("src", "/images/dice"+num2+".png");



