//-----------------------Question no 1-------------------------

var std = [];

//-----------------------Question no 3-------------------------

var str = ['ali', 'shah', 'hammad', 'waji'];

//-----------------------Question no 4-------------------------

var num = [2, 5, 4, 3, 6, 7, 9];

//-----------------------Question no 5-------------------------

var bool = [true, false, false, false, true, true];

//-----------------------Question no 6-------------------------

var mix = ['shah', 3, true];

//-----------------------Question no 7-------------------------

var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'B.com', 'MS', 'M.Phil', 'PhD'];
document.write("<h1>Qualification</h1>");
document.write("<ol>")
for (var i = 0; i < qualification.length; i++) {
    document.write("<li>" + qualification[i] + "</li>");
}
document.write("</ol>");

//-----------------------Question no 8-------------------------

var std1 = ['ali', 'shah', 'hammad'];
var marks = [320, 230, 480];
document.write("<h2>Marks and Percentage</h2>");
document.write("<ul>");
for (var i = 0; i < std1.length; i++) {
    document.write("<li>Score of " + "<b>" + std1[i].toUpperCase() + "</b> is " + marks[i] + ". Percantage : " + "<b>" + ((marks[i] / 500) * 100) + "%</b></li>");
}
document.write("</ul>");

//-----------------------Question no 9-------------------------

var color = ['orange', 'red', 'voilet', 'indego', 'purple'];
document.write("<h3>Original Array</h3>");
document.write("[" + color + "]");
var addStart = prompt("Enter Color Name which you want to add in the start of the array");
color.unshift(addStart);
document.write("<h3>Updated Array add color in start</h3>");
document.write("[" + color + "]");
var addStart = prompt("Enter Color Name which you want to add at the end of the array");
color.push(addStart);
document.write("<h3>Updated Array add color at End</h3>");
document.write("[" + color + "]");
var addStart1 = prompt("Enter Color Name which you want to add at the start of the array");
var addStart2 = prompt("Enter another Color Name which you want to add at the start of the array");
color.unshift(addStart1, addStart2);
document.write("<h3>Updated Array add two color at the Start</h3>");
document.write("[" + color + "]");
color.shift();
document.write("<h3>Updated Array after deleted first color name</h3>");
document.write("[" + color + "]");
color.pop();
document.write("<h3>Updated Array after deleted last color name</h3>");
document.write("[" + color + "]");
var index = Number(prompt("Enter Index number where you want to add color"));
var colorname = prompt("Enter Color name");
color.splice(index, 0, colorname);
document.write("<h3>Updated Array after adding color name</h3>");
document.write("[" + color + "]");
var index = Number(prompt("Enter index number which color you want to delet"));
var quantity = Number(prompt("Enter how many color you want to delet"));
color.splice(index,quantity);
document.write("<h3>Updated Array after deleting color name</h3>");
document.write("[" + color + "]");

//-----------------------Question no 10-------------------------

var stdMark = [320,230,480,120];
stdMark.sort();
document.write("<br>[" + stdMark + "]");

//-----------------------Question no 11-------------------------

var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selectedCities = cities.slice(1,4);
document.write("<h3>Cities List : </h3> [" + cities + "]");
document.write("<h3>Selected cities List : </h3> [" + selectedCities + "]");

//-----------------------Question no 12-------------------------

var arr = ['This','is','my','cat'];
var arr2 = arr.join(' ');
document.write("<h3>Array : </h3> [" + arr + "]");
document.write("<h3>String : </h3> " + arr2);

//-----------------------Question no 13-------------------------

var devices = [];
for(var i=0; i<4;i++){
    var input = prompt("Enter Device Name");
    devices.push(input);
}
document.write("<h3>Devices : </h3> [" + devices + "]");
for(var i=0; i<devices.length;i++){
    document.write("<h3>Out: </h3>" + devices[i]);
}

//-----------------------Question no 14-------------------------

var devices = [];
for(var i=0; i<4;i++){
    var input = prompt("Enter Device Name");
    devices.push(input);
}
document.write("<h3>Devices : </h3> [" + devices + "]");
for(var i=devices.length-1; i>-1;i--){
    document.write("<h3>Out: </h3>" + devices[i]);
}

//-----------------------Question no 15-------------------------

var make = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
document.write("<br><select>");
for(var i=0; i<make.length;i++){
    document.write("<option>" + make[i] + "</option>");
}
document.write("</select>");