var animationGo = () =>{
    var background = document.getElementById("sky");

var season = setInterval(skyMove, 5);

var firstMove = 0;
var secondMove = 0;
var thirdMove = 0;
var fourthMove = 0;

function skyMove(){

    if ( firstMove < 200){
        background.style.backgroundImage = 'url("images/skyTwilight.jpeg")';
        firstMove ++;
    }

    else if(secondMove < 200){
    background.style.backgroundImage = 'url("images/skyNight2.jpeg")';
    secondMove ++;
}
    else if (thirdMove < 200){
    background.style.backgroundImage = 'url("images/skyTwilight2.png")';
    thirdMove ++;
}
else if (fourthMove < 200){
    background.style.backgroundImage = 'url("images/skyBlue.jpeg")';
    fourthMove ++;
}
    else {
    // background.style.backgroundImage = 'url("images/skyBlue.jpeg")';
    firstMove = 0;
    secondMove = 0;
    thirdMove = 0;
    fourthMove = 0;

}
setTimeout(season, 10);
}
}


var animationTwo = () => {
    
    var tree = document.getElementById("tree");
setInterval(changingTree, 5);
var firstMove = 0;
var secondMove = 0;
var thirdMove = 0;
var fourthMove = 0;

function changingTree(){
    if ( firstMove < 500){
        tree.style.backgroundImage = 'url("images/tree1.png")';
        firstMove ++;
    }

    else if(secondMove < 500){
        tree.style.backgroundImage = 'url("images/tree2.png")'
    secondMove ++;
}
    else if (thirdMove < 500){
        tree.style.backgroundImage = 'url("images/tree3.png")'
    thirdMove ++;
}
    else if(fourthMove < 500){
        tree.style.backgroundImage = 'url("images/tree4.png")'
        fourthMove++;}
        else{
    firstMove = 0;
    secondMove = 0;
    thirdMove = 0;
    fourthMove = 0;
}
}
}
