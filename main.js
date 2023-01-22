var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word){
    if(word === "paper") return '<img src="./assets/kertas.png" width="150" height="150">';
    if(word === "rock") return '<img src="./assets/batu.png" width="150" height="150">';
    return '<img src="./assets/gunting.png" width="150" height="150">'
}
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
        win(UserChoice);
    }
    else if(UserChoice === ComChoice){
        draw(UserChoice);
    }
    else{
        lose(UserChoice);
    }
    function continuGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "flex";
    }
    setTimeout(continuGame, 1200);
}
function win(bn){
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}
function draw(bn){
    document.getElementById("who").innerHTML = "It's a Draw.";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}
function lose(bn){
    ComPoints++;
    document.getElementById("who").innerHTML = "You lose...";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}