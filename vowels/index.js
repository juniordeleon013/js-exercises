// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const matches = str.match(/["aeiou"]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
// 	const vowels = ['a','e', 'i', 'o', 'u'];
// 	let max = 0;

// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
// 		if(vowels.includes(char)){
// 			max++;
// 		}
// 	}

// 	return max;
// }

// function vowels(str) {
// 	const vowels = ['a','e', 'i', 'o', 'u'];
// 	let vowelsNumber = {};
// 	let max = 0;

// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase().split('')){
// 		for (let i = 0; i < vowels.length; i++) {
// 			if(char === vowels[i]){
// 				if(!vowelsNumber[char]){
// 					vowelsNumber[char] = 1;	
// 				}else{
// 					vowelsNumber[char] += 1;
// 				}
// 				break;
// 			}
// 		}
// 	}


// 	for(let char in vowelsNumber){
// 		if(vowelsNumber[char] > max){
// 			max = vowelsNumber[char];
// 		}
// 	}
// 	return max;

// }