function getResult(a,b,c){
    'use strict';
    let Discrim = b**2 - 4 * a * c;
    let x;
    if (Discrim > 0) {
    	x = [(-b + Math.sqrt(Discrim)) / (2 * a), (-b - Math.sqrt(Discrim)) / (2 * a)]; 
    } else if (Discrim === 0) {
    	x = [-b / (2 * a)];
    } else {
    	x = [];
    }
    // код для задачи №1 писать здесь
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0;
    let averageMark = 0;
    if (marks.length === 0) {
    	return averageMark;
    } else {
       	let marks2 = marks.slice(0, 5);
    	for(let i = 0; i < marks2.length; i++) {
    		sum = sum + marks2[i];
    	}
    	averageMark = sum / marks2.length;
    	return averageMark;
    }
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - new Date(dateOfBirthday).getFullYear(); 
    if (age >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
    	return result;
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    	return result;
    }
}