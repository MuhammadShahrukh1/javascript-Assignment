//-------------------------------Question no 1----------------------------------------------

var posInt = Number(prompt("Enter any Positive Integer"));
document.write("<p>Number : " + posInt + "</p>");
document.write("<p>Round off Value : " + Math.round(posInt) + "</p>");
document.write("<p>Floor Value : " + Math.floor(posInt) + "</p>");
document.write("<p>Ceil Value : " + Math.ceil(posInt) + "</p><br>")

//-------------------------------Question no 2----------------------------------------------

var posInt = Number(prompt("Enter any negative Integer"));
document.write("<p>Number : " + posInt + "</p>");
document.write("<p>Round off Value : " + Math.round(posInt) + "</p>");
document.write("<p>Floor Value : " + Math.floor(posInt) + "</p>");
document.write("<p>Ceil Value : " + Math.ceil(posInt) + "</p><br>");

//-------------------------------Question no 3----------------------------------------------

var abs = Number(prompt("Enter any Value for find absolute value"));
document.write("<p>The absolute Value of " + abs + " is " + Math.abs(abs) + "</p><br>");

//-------------------------------Question no 4----------------------------------------------

var rand = Math.floor((Math.random() * 6));
document.write("<p>Random dice Value : " + rand + "</p>");

//-------------------------------Question no 5----------------------------------------------

var coin = Math.ceil((Math.random() * 2));
if (coin == 2) {
    document.write("<h2>" + coin + "</h2>");
    document.write("<h4>Random Coin Value : Heads</h4>");
} else {
    document.write("<h2>" + coin + "</h2>");
    document.write("<h4>Random Coin Value : Tails</h4>");
}

//-------------------------------Question no 6----------------------------------------------

var rand = Math.ceil(Math.random() * 100);
document.write("<h4>Random Number between 1 and 100 : " + rand + "</h4>");

//-------------------------------Question no 7----------------------------------------------

var w8 = prompt("Enter your weight");
var weight = '';
for (var i = 0; i < w8.length; i++) {
    if (w8[i].charCodeAt(0) > 45 && w8[i].charCodeAt(0) < 58) {
        weight += w8[i];
    }
}
document.write("<p>The Weight of User is " + weight + " Kilograms.</p>")

//-------------------------------Question no 8----------------------------------------------

var ran = Math.ceil(Math.random() * 10);
var inp = Number(prompt("Enter Number between 1 to 10"));
if (ran === inp) {
    alert("Congratulation You Guess correct Number");
    console.log(ran)
} else {
    alert("Try Again");
    console.log(ran)
}