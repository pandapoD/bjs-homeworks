'use strict';

function getResult(a,b,c){
    let discriminant = b**2 - 4 * a * c;
    let x = [];
    if (discriminant > 0) {
    	x = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]; 
    } else if (discriminant === 0) {
    	x = [-b / (2 * a)];
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
    }
    let marks2 = marks.slice(0, 5);
    for(let i = 0; i < marks2.length; i++) {
    	sum = sum + marks2[i];
    }
    averageMark = sum / marks2.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear(); 
    if (age >= 18) {
    	return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}