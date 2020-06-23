function date() {
    var date = new Date();
    document.write("<h2>Current Date and time is " + date + "</h2>");
}

function fullname(firstName, lastName) {
    document.write("<h3>Well Come!</h3>");
    document.write("<h3>" + firstName + " " + lastName + "</h3>");
}

function add(num1, num2) {
    return num1 + num2
}

function calculator(num1, num2, op) {
    if (op === '+') {
        return num1 + num2
    } else if (op === '-') {
        if (num1 > num2) {
            return num1 - num2
        } else {
            return num2 - num1
        }
    } else if (op === '*') {
        return num1 * num2
    } else if (op === '/') {
        return num1 / num2
    } else {
        alert("Enter correct operator eg (+ - * /)")
    }
}

function square(num) {
    return num * num
}

function factorial(fac) {
    var a = 1;
    if (fac > 0) {
        for (var i = fac; i > 0; i--) {
            a = a * i
        }
        return a
    } else if (fac == 0) {
        return 1
    } else {
        return "Enter Positive Number only"
    }
}
date();
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
fullname(firstName, lastName);
var num1 = Number(prompt("Enter First Number for addition"));
var num2 = Number(prompt("Enter Second Number for addition"));
var num3 = add(num1, num2);
document.write("<h3>Addition</h3>");
document.write("Addition of " + num1 + " & " + num2 + " is " + num3);
var num1 = Number(prompt("Calculator\nEnter First Number"));
var num2 = Number(prompt("Calculator\nEnter Second Number"));
var op = prompt("Calculator\nEnter Operator like('+', '-', '*', '/'");
var result = calculator(num1, num2, op);
document.write("<h3>Calculator</h3>");

if (op === '+') {
    document.write("Additon of " + num1 + " & " + num2 + " is " + result);
} else if (op === '-') {
    if (num1 > num2) {
        document.write("Subtraction of " + num1 + " & " + num2 + " is " + result);
    } else {
        document.write("Subtraction of " + num2 + " & " + num1 + " is " + result);
    }
} else if (op === '*') {
    document.write("Multiplicaton of " + num1 + " & " + num2 + " is " + result);
} else if (op === '/') {
    document.write("Division of " + num1 + " & " + num2 + " is " + result);
}
var squar = Number(prompt("Enter any number which you want to find square"));
var ans = square(squar);
document.write("<h3>Square</h3>");
document.write("Square of " + squar + " is " + ans);
var fac = Number(prompt("Enter Positive for finding factorial"));
var a = factorial(fac);
document.write("<h3>Factorial</h3>");
document.write("Factorial of " + fac + " is  " + a);

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>")
    }
}
var start = Number(prompt("Enter starting number of counting"));
var end = Number(prompt("Enter ending number of counting"));
document.write("<h3>Counting</h3>");
counting(start, end);

function caclsquare(num) {
    return num * num
}

function calculateHypotenuse(prep, base) {
    prep = caclsquare(prep)
    base = caclsquare(base)
    var hyp = Math.pow((prep + base), (1 / 2))
    return hyp
}
var prep = Number(prompt("Enter Perpendicular of the right angle triangle"))
var base = Number(prompt("Enter Base of the right angle triangle"))
var hyp = calculateHypotenuse(prep, base)
document.write("<h3>Hypotenuse of Right Angle triangle</h3>");
document.write("Hypotenuse of given triangle is " + hyp);

function area(width, height) {
    document.write("<h3>Area of Rectangle</h3>")
    document.write("area of rectangle is " + (width * height))
}
var width = Number(prompt("Enter width of the rectangle"))
var height = Number(prompt("Enter height of the rectangle"))
area(width, height)

function palindrome(str) {
    var str1 = str.toLowerCase().replace(/[\W_]/g, '')
    var reverse = str1.split('').reverse().join('')
    if (str1 === reverse) {
        document.write("<h3>Plaindrome String</h3>")
        document.write(str + " is Plaindrome")
    } else {
        document.write("<h3>Plaindrome String</h3>")
        document.write(str + " is not a Plaindrome")

    }
}
var str = prompt("Enter a String to check which is pliandrome or not")
palindrome(str);

function capitaliz(str) {
    str = str.split(' ')
    var capital = []
    for (var i = 0; i < str.length; i++) {
        capital.push(str[i].slice(0, 1).toUpperCase() + str[i].slice(1).toLowerCase())
    }
    document.write("<h3>Capitalize String</h3>")
    document.write("String is " + str.join(' ') + "<br>")
    document.write("String is Capitalize " + capital.join(' '))
}
var str = prompt("Enter String in Lower Case or Upper case as you wish")
capitaliz(str)

function longword(str) {
    var indexArray = []
    var str1 = str.split(' ')
    for (var i = 0; i < str1.length; i++) {
        indexArray.push(str1[i].length)
    }
    var maxIndex = indexArray.indexOf(indexArray.reduce(function(a, b) { return Math.max(a, b) }))
    document.write("<h3>Finding Longest word in a string</h3>")
    document.write("String is " + str + "<br>")
    document.write("Longest word is " + str1[maxIndex])
}
var str = prompt("Enter String ")
longword(str)

function occurence(str, letter) {
    var str1 = str.split('')
    var count = 0
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === letter) {
            count += 1
        }
    }
    document.write("<h3>Searching Occurrences " + letter + " in " + str + "</h3>")
    document.write(letter + " is " + count + " times repeat in " + str)
}
var str = prompt("Enter Any string")
var letter = prompt("Enter a letter which you want to find number of occurrence")
occurence(str, letter)

function calcCircumference(radius) {
    document.write("<h3>Circumference of Circle</h3>")
    document.write("The circumference is " + (2 * Math.PI * radius))
}

function calcArea(radius) {
    document.write("<h3>Area of Circle</h3>")
    document.write("The Area is " + ((Math.PI) * (Math.pow(radius, 2))))
}
var radius = Number(prompt("Enter Radius of the circle"))
calcCircumference(radius)
calcArea(radius)