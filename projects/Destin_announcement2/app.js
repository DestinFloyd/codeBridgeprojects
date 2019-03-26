// // console.log("working"); #concertImage

// ideas for slideshow on WHILE. 
// loop with a timer.
//  loop with a keyframe

var allPics = ["images/taylor_dancers.jpeg", "images/taylor_dancers2.jpeg", "images/taylor_dancers3.jpeg", "images/taylor_fans.jpeg", "images/taylor_onstageR.jpeg", "images/taylor_onstageR2.jpeg", "images/taylor_onstage3.jpeg" ];
var pictures = 0;
var imagesLength = allPics.length-1;

var swap = (x) => {
pictures += x;
document.getElementById("concertImage").src = allPics[pictures];
while( pictures> imagesLength){
    pictures++;

if (pictures< 0){
    pictures = 0;}
}
}





// var allPics = ["images/taylor_dancers.jpeg", "images/taylor_dancers2.jpeg", "images/taylor_dancers3.jpeg", "images/taylor_fans.jpeg", "images/taylor_onstageR.jpeg", "images/taylor_onstageR2.jpeg", "images/taylor_onstage3.jpeg" ];

// //  images length is the last image in the array Length - 1;
// //  vurrent pic calls 1st item in array if at zero or it calls whatever position in the array you are in.

// var imagesLength = allPics.length-1;
// var currentPic = 0;


// var allPics = ["images/taylor_dancers.jpeg", "images/taylor_dancers2.jpeg", "images/taylor_dancers3.jpeg", "images/taylor_fans.jpeg", "images/taylor_onstageR.jpeg", "images/taylor_onstageR2.jpeg", "images/taylor_onstage3.jpeg" ];
// var pictures = 0;
// var imagesLength = allPics.length-1;















