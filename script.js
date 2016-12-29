'use strict';
//Tutorial 1 ****************** Let variable
//let variable is declared from the block that it was declared
function theNotebook() {
	let movie = 'The Notebook';
	return movie;
}
let otherMovie = 'Good Will Hunting'

console.log(theNotebook, theNotebook());
//console.log(movie); // This does not work b/c it's out of scope
console.log(otherMovie); // works b/c otherMovie is declared globally.

function buckyFunction() {
	let isHorse = true;
	let saying = 'Bacon is good.'
	console.log('before the if statement ' + saying); //the {} usually represents a block and 'saying' is inside the buckFunction

	if(isHorse){
		let saying = 'I am a horse.';
		console.log('inside the \'if\' statement ' + saying); // This created a new block so the let variable changes to 'I am a horse'
	}
} 
buckyFunction();

// Tutorial 2 ****************** Arrow Functions
function circleArea1(r) {  // ES 5
	const PI = 3.14;
	return PI * r * r;
}

// ES 6 version of above
let circleArea2 = (r) => { // ES 6
	var PI = 3.14;
	return PI * r * r;
};

let circleArea3 = r => 3.14 * r * r; //ES 6 the most simplified version of the above functions

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));

// Tutorial 3 ***************** Template Literals

let name = 'Bucky';
console.log('My favorite person is not ' + name + ' because he is really weird.');// ES 5 Way
console.log(`My faovorite person is not ${name} because he is really weird.`);

let a = 5;
let b = 7;
console.log(`It can also add two variables ( {a = 5 and b = 7} | ${a + b}) together if they are numbers`); // ES 6

let c = 6;
let d = 8;
let cd = c + d;
console.log(`Best Practice ${cd}`); // ES 6 Best practice to add the variables together.

//ES 6 Template Literals allow you to input a new line without using the newline character '\n', just hit enter put in a new line.
console.log(`This is the first line, 
	and this is the second.`);
console.log(``);

// Tutorial 4. ***************** Spread Operator
function addNumbers1(a, b, c) { //ES 5 Beginning
	console.log(a + b + c);
}

var nums = [3, 4, 5];
addNumbers1(nums[0], nums[1], nums[2]); //ES 5 End

function addNumbers2(a, b, c) { //ES 6 Version
	console.log(a + b + c);
}
var nums2 = [2, 4, 5];
addNumbers2(...nums); // ES 6 Version End

// The object is to take the meats array and add it to the food array, but after apples and not after.
var meats = ['bacon', 'steak'];
var food = ['apples', ...meats,'bananas', 'strawberries', 'ice cream'];
console.log(food); 

//Tutorial 5 *************** Classes