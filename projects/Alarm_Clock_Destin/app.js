console.log("working");
// get the time
// make a button to set a time 
// fucntion when the time are the same 
// that plays a noise

//  so Date is a preset JS function that gets the computers time zones time
// we are making a function that makes a variable set to date and using
//more pre defined functions(get mintues etc) to make it all equal one current time in one 
//string
//globally declaring/
var date;
var h;
var m;
var s;
var sessions;
var time;

//making the function
var showTime = () => {
     date = new Date();
     h = date.getHours(); // 0 -23
     m = date.getMinutes(); //0 - 59
     s = date.getSeconds(); //0-59
     sessions = "AM";

// this part converts it from military time & resets h
    if (h == 0){
    h = 12;
    }
    if(h > 12){
    h = h - 12;
    sessions = "PM";
    }
// fix the single digist showing - writing zero as a string so it shows /affects the #
    if (h < 10){
    h = "0" + h;
    }
    if (m < 10){
    m = "0" + m;
    }
    if (s < 10){
    s = "0" + s;
    }

    time = h + ":" + m + ":" + s + " " + sessions;
    document.getElementById("MyAlarmClock").innerText = time;
    document.getElementById("MyAlarmClock").textContent = time;
    setTimeout(showTime, 1000);




}
showTime();


var hoursOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
currentHoursOption = 0;
var choicesHour = hoursOptions.length-1;
console.log(choicesHour);

var hours = (spot) =>{
    console.log(spot);

currentHoursOption += spot ;
console.log(currentHoursOption);

// console.log(hoursOptions[currentHoursOption]);
if (currentHoursOption > choicesHour){
    currentHoursOption = 0;

}
if(currentHoursOption < 0){
    currentHoursOption = choicesHour;

}
document.getElementById("hourValue").innerHTML = (hoursOptions[currentHoursOption]);
}

var minutesOptions = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,  
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,];
currentMinutesOption = 0;
var choicesMinute = minutesOptions.length-1;
console.log(choicesMinute);

var minutes = (spot) =>{
    console.log(spot);

currentMinutesOption += spot ;

if (currentMinutesOption > choicesMinute){
    currentMinutesOption = 0;

}
if(currentMinutesOption < 0){
    currentMinutesOption = choicesMinute;

}
document.getElementById("minuteValue").innerHTML = (minutesOptions[currentMinutesOption]);
}


var secondsOptions = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,  
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,];
currentsecondsOption = 0;
var choicesSecond = secondsOptions.length-1;
console.log(choicesSecond);

var seconds = (spot) =>{
    console.log(spot);

currentsecondsOption += spot ;

if (currentsecondsOption > choicesSecond){
    currentsecondsOption = 0;

}
if(currentsecondsOption < 0){
    currentsecondsOption = choicesSecond;

}
document.getElementById("secondValue").innerHTML = (secondsOptions[currentsecondsOption]);
}



var sessionsOptions = ["AM", "PM"];
currentSessionsOption = 0;
var choicesSession = sessionsOptions.length-1;
console.log(choicesSession);

var sessionsA = (spot) =>{
    console.log(spot);

currentSessionsOption += spot ;
console.log(currentSessionsOption);

if (currentSessionsOption > choicesSession){
    currentSessionsOption = 0;

}
if(currentSessionsOption < 0){
    currentSessionsOption = choicesSession;

}
document.getElementById("sessionsValue").innerHTML = (sessionsOptions[currentSessionsOption]);
}



// ===========================================
// ===========================================
// everything below is scracth work to build on later 
// my solution idea was to set a function on click for the alarm button
// to compare time to the alarm value and if they are equal 
// change the audio file from play/pause to auto play 
// and to make a shut off switch
//  :) 
// ===========================================
// ===========================================


// setInterval(BB, 1000 )
// function BB (){
// console.log("working");
// }


//= h + ":" + m + ":" + s + " " + sessions;
//var Alyrm = Number(document.getElementById("hourValue")) + ":" + Number(document.getElementById("minuteValue").innerHTML) + ":" + Number(document.getElementById("secondValue").innerHTML) + " " + Number(document.getElementById("sessionsValue").innerHTML);
//  console.log(Tyme);
  

//  var Alarm ;
//   var watcher = () =>{
//     var Alarm =  Number(document.getElementById("hourValue").innerHTML) + ":" + Number(document.getElementById("minuteValue").innerHTML) + ":" + Number(document.getElementById("secondValue").innerHTML) + " " + Number(document.getElementById("sessionsValue").innerHTML);


//     }
// }



//  = h + ":" + m + ":" + s + " " + sessions;
// var Alyrm = Number(document.getElementById("hourValue").innerHTML) + ":" + Number(document.getElementById("minuteValue").innerHTML) + ":" + Number(document.getElementById("secondValue").innerHTML) + " " + Number(document.getElementById("sessionsValue").innerHTML);
// console.log(Tyme);
// console.log(Alyrm);


