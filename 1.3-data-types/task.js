'use strict' 
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь

    let arrInputNumber = [Number.parseInt(percent),Number.parseInt(contribution),Number.parseInt(amount)];
    let arrInput = [percent, contribution, amount]; // здесь долно быть значение с ввода, но в main.js они преобразуются и попадают только NAN
    let arrStringWindows = [' процентная ставка', ' начальный взнос', ' общая стоимость'];
    let arrErrString = [];
    let arrErrNumber = [];
    for (let i = 0; i< 3; i++) {
    	if (isNaN(arrInputNumber [i]) === true) {
    	arrErrNumber.push(arrInput[i]);
    	arrErrString.push(arrStringWindows[i]);
    }
        }
        if (arrErrNumber.length > 0) {
        return `Параметр${arrErrString} содержит неправильное значение ${arrErrNumber}`;
        }
    let principal = amount - contribution;
    let paidMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); 
    if (paidMonths < 1) {
    	return `Дата окончания кредита содержит неправильное значение ${date}`;
    }
    let payment = principal * ((percent / 100 / 12) + (percent / 100 / 12) / (((1 + (percent / 100 / 12))**paidMonths) - 1));
    let totalAmount = payment * paidMonths;
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
	return `Привет, мир! Меня зовут ${name||"Аноним"}`;
}