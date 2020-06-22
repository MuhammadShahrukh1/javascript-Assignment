var date = new Date();
document.write("<h4>" + date + " (PKT)</h4>");
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mon = date.getMonth();
mon = monthArray[mon];
document.write("<h4>Current Month : " + mon + "</h4>");
var dayArray = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
var day = date.getDay();
day = dayArray[day];
document.write("<h4>Today is : " + day + "</h4>");
if (date.getDay() == 0 || date.getDay() == 6) {
    document.write("<h4>Today is " + day + " so It's Fun Day</h4>");
} else {
    document.write("<h4>Today is " + day + " so It's Working day");
}
if (date.getDate() < 16) {
    document.write("<h4>First Fifteen Days of the month</h4>");
} else {
    document.write("<h4>Last Days of the Month</h4>");
}

document.write("<h4>Current date : " + date + " (PKT)</h4>");
document.write("<h4>Elapsed milliseconds since january 1, 1970 : " + date.getTime() + "</h4>");
document.write("<h4>Elapsed Minutes since January 1, 1970 : " + (date.getTime()) / (1000 * 60) + "</h4>");

if (date.getHours() >= 0 && date.getHours() < 12) {
    document.write("<h4>Its " + (date.getHours()) + " : " + (date.getMinutes()) + " : " + (date.getSeconds()) + " AM </h4>");
} else if (date.getHours() >= 12 && date.getHours() < 24) {
    document.write("<h4>Its " + (date.getHours() - 12) + " : " + (date.getMinutes()) + " : " + (date.getSeconds()) + " PM </h4>");
}
var laterDate = new Date('Dec 31, 2020');
document.write("<h4>later Date : " + laterDate + " (PKT)</h4>");
var ramzan = new Date('June 18, 2015');
var days = date.getTime() - ramzan.getTime();
days = Math.floor(days / (1000 * 60 * 60 * 24));
document.write("<h4>" + days + " Dayshave passed since 1st Ramzan, 2015</h4>");
var sec2015beg = new Date('January 1, 2015');
var ref2015 = new Date('December 5, 2015 22:50:16');
document.write("<h4>On reference date : " + ref2015 + "</h4>");
document.write("<h4>" + Math.ceil((ref2015.getTime() - sec2015beg.getTime()) / (1000)) + " seconds had passed since beginning of 2015</h4>");
var date1 = new Date();
document.write("<h4>Current Date : " + date1 + "</h4>");
date1.setHours(date1.getHours() - 1);
document.write("<h4>1 hour ago, it was " + date1 + "</h4>");
var date1 = new Date();
document.write("<h4>Current Date : " + date1 + "</h4>");
date1.setFullYear(date1.getFullYear() - 100);
document.write("<h4>100 Years back, it was " + date1 + "</h4>");
var age = Number(prompt("Enter Your Age"));
var year = date.getFullYear() - age;
document.write("<h4>Your Age is : " + age + "</h4>");
document.write("<h4>Your Birth Year is : " + year + "</h4>");
var customer = prompt("Enter Customer Name");
var month = prompt("Enter Billing Month");
var unit = Number(prompt("How many unit did you used"));
var charge = Number(prompt("How Much price of 1 unit"));
var net_amount = unit * charge;
var late = 350;
var gross_amount = net_amount + late;
document.write("<div class='bill'>");
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name : " + customer + "<br>");
document.write("Month : " + month + "<br>");
document.write("Number of Unit : " + unit + "<br>");
document.write("Charges per Unit : " + charge + "<br><br>");
document.write("Net Amount Payable (within Due Date) : " + net_amount + "<br>");
document.write("Late payment Surcharge : " + late + "<br>");
document.write("Gross Amount Payable (after Due Date) : " + gross_amount + "<br>");
document.write("</div>");