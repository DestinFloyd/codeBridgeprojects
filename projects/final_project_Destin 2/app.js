// console.log("working");

// images by courtesy of: 
// acrophobia by fjDollars2010-wikipedia
// Batman, Dalhenoga Mine train, Dare Devil Dive,  GA Scoracher Goliath , mindbender , sky screamer  SFOG 
// Blue Hawk - wikipedia - photographer unknown 
//scream machine- Negative-G.com
//Justice League - MindBenderManiac and Carolinaman
// pandemonium - business wire .com
//Pandemonium - businesswire.com
// Sky Coaster - the V Regan
// superman - by Pintrest - photographer unknown.
//the joker - Parkz
// twisted cyclone u/jecole85


var allRide = ['url("/images/superman.jpg")', 'url("/images/skyscreamer.jpg")', 'url("/images/theJoker.jpg")', 'url("/images/skycoaster.jpg', 'url("/images/Acrophobia.jpg")', 'url("/images/batmanTheRide.jpg")', 'url("/images/BlueHawk.jpg")',  'url("/images/dahlonegaMineTrain.jpeg")',  'url("/images/georgiaScorcher.jpg")',  'url("/images/goliath.jpg")',  'url("/images/dareDevilDive.jpeg")', 'url("/images/justiceLeague.jpg")',  'url("/images/mindBender.jpeg")',  'url("/images/pandemonium.jpeg")', 'url("/images/screamMachine.jpeg")',  'url("/images/twistedCyclone.jpg")' ];

var ridesLength = allRide.length-1;
var currentRide =0;
var topImage = document.getElementById("ridesImage");

var changeRide = (x) => {
    currentRide+=x;
    topImage.style.background = allRide[currentRide];
    topImage.style.backgroundSize = 'contain';
    topImage.style.backgroundRepeat = 'no-repeat';
    topImage.style.backgroundPositionX = 'center';
    topImage.style.backgroundPositionY = 'center';

    if (currentRide > ridesLength){
        currentRide = 0;
    }
    else if( currentRide < 0){
        currentRide = ridesLength;
    }
}

// second  show

// // images by courtesy of 
//carneevil by coasterNick3157 Youtube
// Loney Tunes Kelsey Canata
//we got the beat courtesy of Springfield museam
// the last 3 photos from SFOG


var allShow = [ 'url("/images/carnEvil.jpg")', 'url("/images/mixtapeShow.jpg")',  'url("/images/wildWestShow.jpeg")',  'url("/images/looneyTune.jpg")', 'url("/images/bah.png")', 'url("/images/christmas.png")', 'url("/images/polarExpress.png")'];

var showLength = allShow.length-1;
var currentShow =0;
var topImage2 = document.getElementById("showImage");

var changeShow = (x) => {
    currentShow+=x;
    topImage2.style.background = allShow[currentShow];
    topImage2.style.backgroundSize = 'contain';
    topImage2.style.backgroundRepeat = 'no-repeat';
    topImage2.style.backgroundPositionX = 'center';
    topImage2.style.backgroundPositionY = 'center';

    if (currentShow > showLength){
        currentShow = 0;
    }
    else if( currentShow < 0){
        currentShow = ShowLength;
    }
}

// third show
//// images by courtesy of  
// Daddy o's & miners cookout by themparksushi.com
//johnny rockets by waymaker.com
// macho nacho by family vacation critic . com


var allDining = [ 'url("/images/deeJaysDiner.png")', 'url("/images/minersCookhouse.png")',  'url("/images/machoNacho.png")',  'url("/images/daddyo_s.png")', 'url("/images/tidalWaveCafe.png")', 'url("/images/munchopolisSnacks.png")', 'url("/images/johnnyRockets.png")'];

var diningLength = allDining.length-1;
var currentDining =0;
var topImage3 = document.getElementById("diningImage");




var changeDining = (x) => {
    currentDining+=x;
    topImage3.style.background = allDining[currentDining];
    topImage3.style.backgroundSize = 'contain';
topImage3.style.backgroundRepeat = 'no-repeat';
topImage3.style.backgroundPositionX = 'center';
topImage3.style.backgroundPositionY = 'center';

    if (currentDining > diningLength){
        currentDining = 0;
    }
    else if( currentDining < 0){
        currentDining = diningLength;
    }
}

// fourth show
// images by courtesy of
// Stores images from SFOG


var allShopping = ['url("/images/sketches.png")', 'url("/images/store1.png")', 'url("/images/store2.png")', 'url("/images/store3.png")', 'url("/images/store5.png")', 'url("/images/store6.png")'];

var shoppingLength = allShopping.length-1;
var currentShopping =0;
var topImage4 = document.getElementById("shoppingImage");


var changeShopping = (x) => {
    currentShopping+=x;
    topImage4.style.background = allShopping[currentShopping];
    topImage4.style.backgroundSize = 'contain';
    topImage4.style.backgroundRepeat = 'no-repeat';
    topImage4.style.backgroundPositionX = 'center';
    topImage4.style.backgroundPositionY = 'center';


    if (currentShopping > shoppingLength){
        currentShopping = 0;
    }
    else if( currentShopping < 0){
        currentShopping = shoppingLength;
    }
}


//  now making 2 function to run all 2 slideshows every 5 seconds if they arent clicked;
// and a second one so theyre on diff time rotating

var allGo = () => {
           changeRide(1);
            changeShopping(1);
        } 
   
window.setInterval(function(){
    allGo()}, 4000);




var allGo2 = () => {
 
        changeShow(1);
        changeDining(1);      
     } 

window.setInterval(function(){
 allGo2()}, 6000);
