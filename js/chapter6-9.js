var num=Number(prompt("Enter any Number"));
document.write("<h2>Result</h2>");
document.write("The Value of a is : " + num + "<br>");
document.write("----------------------------------------------<br>");
document.write("The Value of ++a is : " + ++num + "<br>");
document.write("Now the value of a is : " + num + "<br><br><br>");
document.write("The value of a++ is : " + num++ + "<br>");
document.write("Now the value of a is : " + num + "<br><br><br>");
document.write("The Value of --a is : " + --num + "<br>");
document.write("Now the value of a is : " + num + "<br><br><br>");
document.write("The Value of a-- is : " + num-- + "<br>");
document.write("Now the value of a is : " + num + "<br><br><br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//--a = 1
//--a - --b = 1-0
//--a - --b + ++b = 1-0+1
//--a - --b + ++b + b-- = 1-0+1+1
document.write("a is : " + a + "<br>");  
document.write("b is : " + b + "<br>");
document.write("Result is : " + result + "<br>");

var table =Number(prompt("Enter any Number"));
if(table==0){
   for  (var i=1; i<=10;i++){
      document.write("5 X " + i + " = " + (5*i) + "<br>");
   }
}
else{
   for(var i=1; i<=10;i++){
      document.write(table + " X " + i + " = " + (table*i) + "<br>");
   }
}
document.write("<h2>Mark Sheet</h2>");
var sub1 = prompt("Enter Subject 1 Name").toUpperCase();
var sub2 = prompt("Enter Subject 2 Name").toUpperCase();
var sub3 = prompt("Enter Subject 3 Name").toUpperCase();
var mark1 = Number(prompt("Enter Mark of subject 1 out of 100"));
var mark2 = Number(prompt("Enter Mark of subject 2 out of 100"));
var mark3 = Number(prompt("Enter Mark of subject 3 out of 100"));
var total = 100;
document.write("<table border='2px'>");
document.write("<tr>");
document.write("<td>Subject</td>");
document.write("<td>Total Marks</td>");
document.write("<td>Obtained Marks</td>");
document.write("<td>Percentage</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" +sub1+"</td>");
document.write("<td>"+total+"</td>");
document.write("<td>"+mark1+"</td>");
document.write("<td>"+((mark1/total)*100)+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+sub2+"</td>");
document.write("<td>"+total+"</td>");
document.write("<td>"+mark2+"</td>");
document.write("<td>"+((mark2/total)*100)+"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+sub3+"</td>");
document.write("<td>"+total+"</td>");
document.write("<td>"+mark3+"</td>");
document.write("<td>"+((mark3/total)*100)+"</td>");
document.write("</tr>");
document.write("</table>");