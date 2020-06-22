//----------------------------------------Question no 1-----------------------------------------------------

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;
alert(fullName);

//----------------------------------------Question no 2-----------------------------------------------------

var mob = prompt("Enter your mobile brand and model name");
document.write("<p>My favorite Phone is : " + mob + "</p>");
document.write("<p>Length of string : " + (mob.length) + "</p><br>");

//----------------------------------------Question no 3-----------------------------------------------------

var city = "Pakistani";
document.write("<p>String : " + city + "</p>");
document.write("<p>Index of 'n' : " + (city.indexOf('n')) + "</p><br>");

//----------------------------------------Question no 4-----------------------------------------------------

var str = "Hello World!";
document.write("<p>String : " + str + "</p>");
document.write("<p>Last Index of 'l' : " + (str.lastIndexOf('l')) + "</p><br>");

//----------------------------------------Question no 5-----------------------------------------------------

var str1 = "Pakistani";
document.write("<p>String : " + str1 + "</p>");
document.write("<p>Character at Index 3 : " + (str1.charAt(3)) + "</p><br>");

//----------------------------------------Question no 6-----------------------------------------------------

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName.concat(" " ,lastName);
alert(fullName);

//----------------------------------------Question no 7-----------------------------------------------------

var city1 = "Hyderabad";
document.write("<p>City : " + city1 + "</p>");
document.write("<p>After Replacement : " + (city1.replace('Hyder', 'Islam')) +"</p><br>")

//----------------------------------------Question no 8-----------------------------------------------------

var msg = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<p>Message : " + msg + "</p>");
document.write("<p>After Replacement of and : " + (msg.replace(/and/g, '&')) +"</p><br>");

//----------------------------------------Question no 9-----------------------------------------------------

var str2 = '472';
document.write("<p>Value : " + str2 +"</p>");
document.write("<p>Type : " + typeof(str2) +"</p>");
str2 = Number(str2);
document.write("<p>Value : " + str2 +"</p>");
document.write("<p>Value : " + typeof(str2) +"</p><br>");

//----------------------------------------Question no 10-----------------------------------------------------

var input = prompt("Enter Any thing");
document.write("<p>User Input : " + input +"</p>");
document.write("<p>Upper Case : " + input.toUpperCase() + "</p><br>");

//----------------------------------------Question no 11-----------------------------------------------------

var input1 = prompt("Enter any thing");
var title = input1.slice(0,1).toUpperCase() + input1.slice(1).toLowerCase();
document.write("<p>User Input : " + input1 + "</p>");
document.write("<p>Title Case : " + title + "</p><br>");

//----------------------------------------Question no 12-----------------------------------------------------

var num = 35.36;
document.write("<p>Number : " + num + "</p>");
document.write("<p>Result : " + ((String(num)).replace('.', '')) + "</p><br>");

//----------------------------------------Question no 13-----------------------------------------------------

var userName = prompt("Enter Your User name");
for(var i=0; i<userName.length; i++){
    var check = userName[i].charCodeAt(0);
    if ((check>32 && check<=47) || (check>57 && check<=64) || (check>90 && check<=96) || (check>122 && check<=127)){
        alert("Enter Valid User Name");
    }
}

//----------------------------------------Question no 14-----------------------------------------------------

var A = ['cake','apple pie','cookie','chips','patties'];
var chek,j;
var user = prompt("Welcome to My Bakery. What do you want to order sir/ma'am?").toLowerCase();
for (var i=0; i<A.length;i++){
    if (user === A[i]){
        chek = A[i];
        j = i;
        break;
    }
}
if(user === chek){
    document.write(user + " is <b>Available</b> at index " + j+ " in our Bakery");
}
else{
    document.write("We are sorry. "+user+ " is <b>not available</b> in our Bakery");
}

//----------------------------------------Question no 15-----------------------------------------------------

var pasw = prompt("Enter a Password");
if(pasw.length >= 6){
    if((pasw.charCodeAt(0)>=48) && (pasw.charCodeAt(0)<58)){

    }
    else{
        alert("Password Can not begin with a Number");
    }
}
else{
    alert("Not accepted criteria isn't  met. Password length should be six or more than six");
}

//----------------------------------------Question no 16-----------------------------------------------------

var uni = 'University of Karachi';
var uni1 = uni.split('');
for(var i=0; i<uni1.length; i++){
document.write(uni1[i] +"<br>");}

//----------------------------------------Question no 17-----------------------------------------------------

var input = prompt("Enter Any String");
document.write("<p>User Input : " + input + "</p>");
document.write("<p>Last Character of Input : " + (input.charAt(input.length-1) + "</p><br>"));

//----------------------------------------Question no 18-----------------------------------------------------

var str = "The quick brown fox jumps over the lazy dog";
var str1 = str.split(' ');
var match = [];
for(var i=0; i<str1.length; i++){
    for(var j=i+1; j<str1.length; j++){
        if(str1[i].toLowerCase()===str1[j].toLowerCase()){
            match.push(str1[i]);
            match.push(str1[j]);
            // break;
        }
    }
}
document.write("<p>Text : " + str + "</p>");
document.write("<p>There are " + (match.length) + " occurence(s) of word 'the'</p><br>")

//----------------------------------------Question no 1-----------------------------------------------------
