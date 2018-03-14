// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	let residuo1;
	let residuo2;
	let word;

	for(let i = 1; i <= n; i++){
		residuo1 = i % 3;
		residuo2 = i % 5;

		word = i;
		if(residuo1 === 0){
			word = `fizz`;
		}
		if(residuo2 === 0){
			word = `buzz`;
		}

		if(residuo1 === 0 && residuo2 ===0){
			word = `fizzbuzz`;
		}
		console.log(word);
		
	}
}
	

module.exports = fizzBuzz;
