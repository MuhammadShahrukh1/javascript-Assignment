//------------------------- Question No 1 --------------------------------

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write("<table border='1px'>");
for (var i = 0; i < arr.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < 4; j++) {
        document.write("<td width='40px' height='40px'>" + arr[i][j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//------------------------- Question No 3 --------------------------------

for (var i = 1; i < 11; i++) {
    document.write(i + "<br>");
}

//------------------------- Question No 4 --------------------------------

var tableNum = Number(prompt("Enter Table Number"));
var tableLength = Number(prompt("Enter length multiplication table"));
document.write("<h3>Multiplication table of " + tableNum + "</h3>");
document.write("<h3>Length " + tableLength + "</h3>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNum + " X " + i + " = " + (tableNum * i) + "<br>");
}

//------------------------- Question No 5 --------------------------------

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//------------------------- Question No 6 --------------------------------

document.write("<h3>Counting :</h3>");
for (var i = 1; i < 16; i++) {
    document.write(i + ", ");
}
document.write("<h3>Reverse Counting :</h3>");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ");
}
document.write("<h3>Even :</h3>");
for (var i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ");
    }
}
document.write("<h3>Odd :</h3>");
for (var i = 0; i < 21; i++) {
    if (i % 2 !== 0) {
        document.write(i + ", ");
    }
}
document.write("<h3>Series :</h3>");
for (var i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ");
    }
}

//------------------------- Question No 7 --------------------------------

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var chek, j;
var user = prompt("Welcome to My Bakery. What do you want to order sir/ma'am?").toLowerCase();
for (var i = 0; i < A.length; i++) {
    if (user === A[i]) {
        chek = A[i];
        j = i;
        break;
    }
}
if (user === chek) {
    document.write("<br>" + user + " is <b>Available</b> at index " + j + " in our Bakery");
} else {
    document.write("<br>We are sorry. " + user + " is <b>not available</b> in our Bakery");
}

//------------------------- Question No 8 --------------------------------

var a = [24, 53, 78, 91, 12]
var b = a.reduce(function(a, b) { return Math.max(a, b) })
document.write("<br>Array Items : " + a);
document.write("<br>The Largest Number : " + b);

//------------------------- Question No 9 --------------------------------

a = [24, 53, 78, 91, 12]
b = a.reduce(function(a, b) { return Math.min(a, b) })
document.write("<br>Array Items : " + a);
document.write("<br>The Smallest Number is : " + b + "<br>")


for (var i = 1; i < 101; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ")
    }
}