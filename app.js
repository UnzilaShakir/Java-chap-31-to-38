// Chap 31 to 34
// Qno 1
var rightnow = new Date();
console.log(rightnow);

// Qno 2
var dateString = rightnow.getMonth();
console.log(dateString);

// Qno 3
var MonthsArr = ["Jan","Feb","Mar","Apr","May","June","July","Aug",'Sep',"Oct","Nov","Dec"];
console.log(MonthsArr[rightnow.getMonth()]);

// Qno 4
var daysarr = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
console.log(daysarr[rightnow.getDay()]);

// Qno 5
var daysarr = ["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"];
var currentday = daysarr[rightnow.getDay()];

if(currentday === "Sat" || currentday === "Sun"){
    alert("It's a fun day");
}else{
    alert("Today is" + ' ' + currentday);
}

// Qno 6
var dateTime = new Date();
var currentDay = dateTime.getDay();

if(currentDay < 16){
    alert("First Fifteen days of the months");
}else{
    alert("Last days of the months");
}


// Qno 7
var currentTimeMilliseconds = Date.now();
var minutesSinceEpoch = currentTimeMilliseconds / 1000 / 60;
console.log("Milliseconds since Jan. 1, 1970:", minutesSinceEpoch);


// Qno 8
var currentHour = new Date().getHours();

if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// Qno 9
var laterdate = new Date (2020,11,31);
console.log(laterdate);


// Qno 10
var FirstRamadan = new Date("March 1, 2025").getTime();

var currentDate = new Date().getTime();

var diff = FirstRamadan - currentDate;

var month = Math.floor(diff / (1000 * 60 * 60 *24));

alert("Number of days passed since 1st Ramadan: " + month);

// Qno 11
var date = new Date(2015,0,1);

var newdate = new Date();

var diff = date - newdate;

var res = Math.floor(diff/ 1000);
console.log("Seconds elapsed between January 1, 2015, and the reference date: " + res);


// Qno 11
var currentDate = new Date();

var currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 1);

console.log("New Date and Time (1 hour ahead): " + currentDate);

// Qno 12
var currentDate = new Date();

var currentYear = currentDate.getFullYear();

currentDate.setFullYear(currentYear - 100);

alert("The date 100 years back is: " + currentDate);

// Qno 13
var userAge = prompt("Please enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - userAge;

alert("You were born in the year: " + birthYear);

// chap 35 to 38
// Qno 1
function getTime(){
    var righttime = new Date();
    console.log(righttime);
}
getTime();

// Qno 2
function greet(Firstname, Lastname){
   var Fullname = Firstname + ' ' + Lastname;
   alert("Hi" + " "+ Fullname + " " + "Welcome!");
}
greet("John" ,"Doe");

// Qno 3
function addnums(){
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");

    var sum = num1 + num2;
    return sum;
}
var res = addnums();
alert(res);


// Qno 4
function calc(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else if (operator === "%") {
      return num1 % num2;
    } else {
      return "invalid operator";
    }
  }
  
  var result = calc(
    +prompt("Enter first number"),
    +prompt("Enter Second number"),
    prompt("Enter operator")
  );
  
  console.log(result);

// Qno 5
function squareNumber(num) {
        return num * num;
 }
var number = +prompt("Enter the square number"); 
var result = squareNumber(number);
console.log("The square of " + number + " is: " + result);

// Qno 6
function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i; 
    }

    return result;  
}
var number = 4; 
var result = factorial(number);
console.log("The factorial of " + number + " is: " + result);

// Qno 7
function displayCounting(start, end) {
    var counting = "";
    for (var i = start; i <= end; i++) {
        counting += i + " "; 
    }
    console.log("Counting from " + start + " to " + end + ": " + counting);
}
var startNumber = parseInt(prompt("Enter the start number:")); 
var endNumber = parseInt(prompt("Enter the end number:"));     

displayCounting(startNumber, endNumber);

// Qno 8
function calchype(base , perp){
    function calcsquare(x){
      return x * x;
    }

    var basesq = calcsquare(base);
    var perpsq = calcsquare(perp);

    var hypotenuse = Math.sqrt(basesq + perpsq);
    return hypotenuse;
}

var base = +(prompt("Enter the base of the triangle:")); 
var perp = +(prompt("Enter the perpendicular of the triangle:")); 

var result = calchype(base, perp);
alert("The hypotenuse of the triangle is: " + result);

// Qno 9
function calculateArea(width, height) {
    return width * height;
}
var areaWithValues = calculateArea(5, 10);
console.log("Area when passing values: " + areaWithValues);

var rectWidth = 7;
var rectHeight = 12;
var areaWithVariables = calculateArea(rectWidth, rectHeight);
console.log("Area when passing variables: " + areaWithVariables);

// Qno 10
function palindrome(str){
    var userInput = prompt("Enter any word");

    var finalWord = "";

for (var i = userInput.length-1; i>=0; i--){
 finalWord+=userInput[i];
}
if(userInput===finalWord){
    alert(`It is palindrome`)
}else{
    alert(`It's not a palindrome`)
}
}
palindrome();

// Qno 11
function Capital(str){
    var words = str.split(" ");

    for(var i = 0; i < words.length; i++){
        let firstLetter = words[i].charAt(0).toUpperCase();
        let restOfWord = words[i].slice(1); 
        words[i] = firstLetter + restOfWord;
    }

    var capitalstr = words.join(" ");
    return capitalstr;
}

var example = "the quick brown fox";
var res = Capital(example);
alert(res);


// Qno 12
function findLongestWord(str) {
    let words = str.split(" ");

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; 
        }
    }

    return longestWord; 
}

let exampleString = 'Web Development Tutorial';
let res1 = findLongestWord(exampleString);
console.log("The longest word is: " + res1); 

// Qno 13
function countletter(str, letter){
    var count = 0;

    for(var i = 0; i < str.length; i++){
        if(str[i] === letter){
            count++;
        }

    }
    return count;
}

var sampleString = 'JSResourceS.com';
var letterToCount = 'o';
var res2 = countletter(sampleString, letterToCount);
console.log("The letter '" + letterToCount + "' occurs " + res2 + " times."); 

















