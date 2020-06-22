var cityName = prompt("Enter city name").toLowerCase();
if (cityName==='karachi'){
    alert("Welcome to city of light");
}
else if (cityName==='islamabad'){
    alert("Welcome to the Capital of Pakistan");
}
else if (cityName==='lahore'){
    alert("Welcome to the Capital of Province of Punjab");
}
else if (cityName==='quetta'){
    alert("Welcome to the Capital of Province of Balochistan");
}
else if (cityName==='peshawar'){
    alert("Welcomme to the Capital of Province of Khyber Pakhtwkhan")
}

var gender = prompt("Enter your Gender").toLowerCase();
if (gender==='male'){
    alert("Good Morning Sir!");
}
else if(gender=='female'){
    alert("Good Morning ma'am");
}

var color = prompt("Enter Traffic Color light").toLowerCase();
if (color==='red'){
    alert("Must Stop");
}
else if(color==='yellow'){
    alert("Ready to move");
}
else if(color==='green'){
    alert("Must Move");
}
else{
    alert("Enter valid color");
}

var currentFuel = Number(prompt("Enter Remaining Fuel in your vehical"));
if (currentFuel<=0.25){
    alert("Please refill the fuel in your Vehical");
}
else{
    alert("Enough Fuel In your Vehical");
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

var marks = [];
for (var i=0; i<3; i++){
    marks[i] = Number(prompt("Enter Subjec " +(i+1) + " Marks"));
}
var TotalMarks = Number(prompt("Enter Total Marks"));
var per = ((marks[0]+marks[1]+marks[2])/TotalMarks)*100;
document.write("<h2>Mark Sheet</h2>")
document.write("Total Marks : " + TotalMarks + "<br>");
document.write("Obtained Marks : " + (marks[0]+marks[1]+marks[2]) + "<br>");
document.write("Percentage : " + per +  "%<br>");
if (per>=80){
    document.write("Grade : A-one<br>");
    document.write("Remark : Excellent<br>");
}
else if (per>=70 && per<80){
    document.write("Grade : A<br>");
    document.write("Remark : Good<br>");
}
else if (per>=60 && per<70){
    document.write("Grade : B<br>");
    document.write("Remark : You need to Improve<br>");
}
else{
    document.write("Grade : Fail<br>");
    document.write("Remark : Sorry<br>");
}

var secretNum = 8;
var guessNum = Number(prompt("Guess Any Number between (1 to 10)"));
if (guessNum===secretNum){
    alert("Bingo! Correct answer");
}
else if((guessNum+1)===secretNum){
    alert("Close enough to the correct answer");
}
else{
    alert("You enter wrong Number");
}

var checkNum = Number(prompt("Enter a Number"));
if ((checkNum%3)===0){
    alert("Given number is Divisible by 3");
}
else{
    alert("Given number is not Divisible by 3");
}

var checkevenodd = Number(prompt("Enter a Number"));
if ((checkevenodd%2)===0){
    alert(checkevenodd + " is Even");
}
else{
    alert(checkevenodd + " is odd");
}

var temp = Number(prompt("Enter Value of Temperature"));
if (temp>40){
    alert("It is too Hot outside");
}
else if(temp>30 && temp<=40){
    alert("The Weather of today is Normal");
}
else if(temp<=30 && temp>20){
    alert("Today's Weather is cool.");
}
else{
    alert("OMG! Today's weather is so Cool.")
}

var num1 = Number(prompt("Enter First Number"));
var num2 = Number(prompt("Enter Second Number"));
var op = prompt("Enter Operation Symbol which you want e.g (+,-,*,/ and %");
if (op==='+'){
    var num3 = num1 + num2;
    alert("Addition of " + num1 + " and " + num2 + " is " + num3);
}
else if(op==='-'){
    if (num1>num2){
        var num3 = num1 - num2;
        alert("Subtraction of " + num1 + " and " + num2 + " is " + num3);
    }
    else{
        var num3 = num2 - num1;
        alert("Subtraction of " + num2 + " and " + num1 + " is " + num3);
    }
}
else if(op==='*'){
    var num3 = num1*num2;
    alert("Multiplication of " + num1 + " and " + num2 + " is " + num3);
}
else if(op==='/'){
    var num3 = num1/num2;
    alert("Division of " + num1 + " and " + num2 + " is " + num3);
}
else if(op==='%'){
    var num3 = num1%num2;
    alert("Remainder of " + num1 + " and " + num2 + " is " + num3);
}
else{
    alert("Enter Valid Operation");
}