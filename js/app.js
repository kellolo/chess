var doc = document;
var CHESS = [];
var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var createField = function () {
	let field = doc.createElement('div');
	field.classList.add('field');
	doc.body.appendChild(field);
	let desk = [];
	for (let i = 0; i < 10; i++) {
		let row = [];
		for (let j = 0; j < 10; j++) {
			let cell;
			if ((i == 0 && j == 0) || (i == 9 && j == 0 ) || (i == 0 && j == 9 ) || (i == 9 && j == 9 )) {
				cell = 'x';
			} else if ((i == 0 && j > 0 && j < 9) || (i == 9 && j > 0 && j < 9)) {
				cell = LETTERS[j - 1];
			} else if ((j == 0 && i > 0 && i < 9) || (j == 9 && i > 0 && i < 9)) {
				cell = i;
			} else {
				cell = LETTERS[j - 1] + i;
			}
			
			row.push(cell);
		}
		desk.push(row);	
	}

	for (let i = 0; i <= 9; i++) {
		let row = doc.createElement('div');
		row.classList.add('row');
		let color;
		if (i % 2 == 1) {
			color = 'white';
		} else {
			color = 'black';
		}
		for (let j = 0; j <= 9; j++) {
			let cell = desk[i][j];
			let cellDiv = doc.createElement('div');
			if (cell == 'x') {
				cellDiv.classList.add('border');
			} else if (cell == LETTERS[j - 1]) {
				cellDiv.classList.add('border');
				cellDiv.innerText = LETTERS[j - 1];
			} else if (cell + 1000 > 100) {
				cellDiv.classList.add('border');
				cellDiv.innerText = i;
			} else {
				cellDiv.classList.add('cell');
				cellDiv.classList.add(color);
				if (color == 'white') {
					color = 'black'
				} else if (color == 'black') {
					color = 'white'
				}
			}
			row.appendChild(cellDiv);
		}
		field.appendChild(row);
	}
	console.log(desk);
};

window.addEventListener('load', createField);