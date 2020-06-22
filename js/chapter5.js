var num1 = Number(prompt("Enter first Numer."));
var num2 = Number(prompt("Enter Second Number."));
document.write("<h1>Calculator</h1>")
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
document.write("<br>Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2));
document.write("<br>Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2));
document.write("<br>Division of " + num1 + " and " + num2 + " is " + (num1 / num2));
document.write("<br>Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2));
var name;
document.write("<br><br>Value after variable declaration is " + name);
name = 2
document.write("<br><br>Initial Value is " + name);
name = ++name
document.write("<br><br>Value after increment is " + name);
name = name + 7
document.write("<br><br>Value after addition is " + name);
name = --name
document.write("<br><br>Value after decrement is " + name);
name = name%3
document.write("<br><br>The remainder is " + name);
var ticket = 600;
ticket = ticket*5;
document.write("<br><br>Total cost to buy 5 tickets to a movie is " + ticket);
var table = Number(prompt("Enter table number"));
document.write("<h2>Table of " + table + "</h2>");
for (var i=1;i<11;i++){
document.write(table + " X "+i+" = " + (table*i) +"<br>");
}
var cel = Number(prompt("Enter Temperature in Celcius"));
var far = NUmber(prompt("Enter Temperature in Farenhit"));
var far1 = (cel*(9/5))+32;
var cel1 = (far-32)*(5/9);
document.write("<br>" + cel +"°C is " + far1 +"°F")
document.write("<br>" + far + "°F is " + cel1 + "°C")

var item1 = 650
var item2 = 100
var quanitem1 = 3
var quanitem2 = 7
var charge = 100
var total = (item1*quanitem1)+(item2*quanitem2)+charge
document.write("<br><br>Price of Item 1 is "+ item1);
document.write("<br>Quanity of item 1 is "+ quanitem1);
document.write("<br>Price of item 2 is "+ item2);
document.write("<br>Quantity of item 2 is "+quanitem2);
document.write("<br>Shipping Charges is "+ charge);
document.write("<br><br>Total cost of your order is "+total);

document.write("<h2>Mark Sheet</h2>")
var totalmark = 980
var obtained = 804
var per = (obtained/totalmark)*100
docuement.write("<br>Total Marks : " + totalmark);
docuement.write("<br>Marks Obtained : " + obtained);
docuement.write("<br>Percentage : " + per);

var dollar = 10;
var riyal = 25
var pkr = (10*104.80)+(25*28);
document.write("<h2>Currency in PKR</h2>");
document.write("<br>Total Currency in PKR : " + pkr);

var num = 5
num = ((num+5)*10)/2;

document.write("<h2>Age Calculator</h2>")
var currentYear = 2020;
var birthYear = Number(prompt("Enter Your Birth Year"));
var age = currentYear-birthYear;
document.write("<br>Current Year : "+currentYear);
document.write("<br>Birth Year : "+birthYear);
document.write("<br>Your age : "+age);


document.write("<h2>The Geometrizer</h2>")
var radius = Number(prompt("Enter Radius of the circle"))
document.write("<br>Radius of a circle : "+radius);
document.write("<br>The Circumference is : "+(2*3.142*radius));
document.write("<br>The Area is : "+(3.142*radius*radius));

document.write("<h2>The Lifetime Supply Calculator</h2>")
var snack = prompt("Enter your favourite snack");
var age = Number(prompt("Enter your current age"));
var maxAge = Number(prompt("Enter maximum age"));
var amount = Number(prompt("Enter an estimated amount per day you eat"));
document.write("<br>Favourite Snack : "+snack);
document.write("<br>Current age : "+age);
document.write("<br>Estimated Maximum Age : "+maxAge);
document.write("<br>Amount of Snack per day"+amount);
document.write("<br>You will need "+ (maxAge-age)*365*amount + " " + snack + " to last you untill the ripe old age of " + maxAge);








