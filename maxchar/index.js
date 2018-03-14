// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	let charsObject = {};
	let max = 0;
	let maxCharac = "";

	for(let char of str){
		//forma corta
		charsObject[char] = charsObject[char] + 1 || 1; 

		//forma larga
// 		if(!charsObject[char]){
// 			charsObject[char] = 1;
		 	
// 		}else{
// 			charsObject[char] += 1

// 		}
	}

	for(let char in charsObject){

		if (charsObject[char] > max){
			max = charsObject[char];
			maxCharac = char;
		}
		
	}
	return maxCharac;

}

module.exports = maxChar;
