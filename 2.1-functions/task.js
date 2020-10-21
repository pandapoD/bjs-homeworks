//-------------------------------------Задача 1----------------------------------------------------------------------
function getSolutions(a, b, c) {
	let D = b**2 - 4 * a * c;
	let x1 = (-b + Math.sqrt(D)) / (2 * a);
	let x2 = (-b - Math.sqrt(D)) / (2 * a);
	let Solutions = {};
	if (D < 0) {
		return Solutions = {D: D, roots: []};
	} else if (D === 0) {
		return Solutions = {D: D, roots: [x1]}
	};
	return Solutions = {D: D, roots: [x1, x2]};
};

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}` + '\n' + `Значение дискриминанта: ${result.D}` + '\n');
	switch (result.roots.length) {
		case 0:
		console.log(`Уравнение не имеет вещественных корней`);
		break;
		case 1: 
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
		break;
		case 2:
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	};
};


showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//---------------------------------------Задача 2--------------------------------------------------------------------

let ArrayAverege = []
function getAverageMark(marks) {
	let sum = 0;
	if (marks.length === 0) {
		return AverageMark = 0;
	}

	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i];
	} 

	AverageMark = sum / marks.length;
	return AverageMark;
}

function getAverageScore(data) {
	if (data === {}) {
		return 0;
	}

	for (let key in data) {
		data[key] = getAverageMark (data[key]);
		ArrayAverege.push(AverageMark);
		console.log (ArrayAverege);
	}
	
	data.average = getAverageMark (ArrayAverege);
	console.log (data);
	return (data);
}

// 	getAverageScore ({
// 	algebra: [2, 4, 5, 2, 3, 4],
// 	geometry: [2, 4, 5],
// 	russian: [3, 3, 4, 5],
// 	physics: [5, 5],
// 	music: [2, 2, 6],
// 	english: [4, 4, 3],
// 	poetry: [5, 3, 4],
// 	chemistry: [], 
// 	french: [4, 4],
// 	drawing: []
// });

// getAverageScore ({});

//--------------------------Задача 3-----------------------------------------------------------------------------------
function getPersonData(secretData) {
	return {
		firstName: getDecodedValue(secretData.aaa),
		lastName: getDecodedValue(secretData.bbb)
	}
}

function getDecodedValue(secret) {
	return (secret == 0) ? 'Родриго' : 'Эмильо';
}


//getDecodedValue(5);
console.log(getPersonData({
	aaa: 0,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 0
}));
console.log(getPersonData({
	aaa: 0,
	bbb: 1
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 1
}));
