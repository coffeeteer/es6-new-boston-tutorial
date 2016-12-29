'use strict';

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

// Arrow Functions
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