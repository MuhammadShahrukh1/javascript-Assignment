//----------------------------------Question no 2------------------------------------------------

var num1 = Number(prompt("Enter first integer"));
var num2 = Number(prompt("Enter second integer"));
if(num1<num2){
    alert(num2 + " is greater than " + num1);
}
else if(num1===num2){
    alert(num1 + " is equal to " + num2);
}
else{
    alert(num1 + " is Greater than " + num2);
}

//----------------------------------Question no 3------------------------------------------------

 var checkNum = Number(prompt("Enter any number"));
 if(checkNum>0){
     alert(checkNum+ " is Positive number");
 }
 else if(checkNum<0){
     alert(checkNum + " is Negative Number");
 }
 else{
     alert("Given Number is Zero");
 }

//----------------------------------Question no 4------------------------------------------------

 var vowels = prompt("Enter any alphabet").toLowerCase();
 if (vowels==='a' || vowels==='e' || vowels==='i' || vowels==='o' || vowels==='u'){
     alert("True")
 }
 else{
     alert("False")
 }

//----------------------------------Question no 5------------------------------------------------

var pas = '1234567';
var enterpas = prompt("Enter Password");
if(enterpas===''){
    alert("Please enter your password.");
}
else if(enterpas===pas){
    alert("Coorect! The password you entered matches the original password.");
}
else{
    alert("Incorrect Password.");
}

//----------------------------------Question no 6------------------------------------------------

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

//----------------------------------Question no 7------------------------------------------------

var time = Number(prompt("Enter Time in 24 Hour format like 1900=7pm"));
if(time>=0000 && time<1200){
    alert("Good Morning!");
}
else if(time>=1200 && time < 1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good Evening!");
}
else if(time>=2100 && time<2359){
    alert("Good Night!");
}
else{
    alert("Invalid entery.")
}

//----------------------------------Question no 1------------------------------------------------

var ch = prompt("Enter any character");
var i = ch.charCodeAt(0);
if(i>=47 && i<58){
    alert("You enter a Number");
}
else if(i>=65 && i<91){
    alert("You Enter Capital letter");
}
else if(i>=97 && i<123){
    alert("You Enter Small Letter");
}
else{
    alert("You enter wrong command");
}