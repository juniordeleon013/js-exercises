// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(step, row = 0, stair = '') {
	
	if(step === row){
		return;
	}

	if(step === stair.length){
		console.log(stair);
		return steps(step, row + 1);
	}

	if(stair.length <= row){
		stair += '#';
	}else{
		stair += ' ';
	}

	steps(step, row, stair);
}

module.exports = steps;

// for(let row = 0; row < step; row++){
// 		let stair = '';

// 		for(let column = 0; column < step; column++){
// 			if(column <= row){
// 				stair += '#';
// 			}else{
// 				stair += ' ';
// 			}
// 		}


// 		console.log(stair);	
// 	}

// function steps(step) {
// 	const symbol = "#";
// 	let string = [];

// 	for(let i = 0; i < step; i++){
// 		if(i === 0){
// 			for(let z = 1; z <= step; z++){
// 				string.push(" ");
// 			}
// 		}
// 		string.splice(i, 1, symbol);
// 		console.log(string.join(''));	
// 	}
// }