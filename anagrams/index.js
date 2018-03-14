// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str){
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
// 	const a = buildCharMap(stringA);
// 	const b = buildCharMap(stringB);

// 	if(Object.keys(a).length !== Object.keys(b).length){
// 		return false
// 	}

// 	for(let char in a){
// 		if(a[char] !== b[char]){
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function buildCharMap(str){
// 	const obj = {};

// 	const w1 = str.replace(/[^\w]/g, "").toLowerCase().split('');

// 	for(let char of w1){

// 		if(!obj[char]){
// 			obj[char] = 1;
// 		}else{
// 			obj[char] = obj[char] + 1;
// 		}

// 		return obj;
// 	}
// }
