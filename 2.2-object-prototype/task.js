//String.prototype.isPalindrome - для задачи №1


String.prototype.isPalindrome = function() {
	// const reverseStr = this.toUpperCase().split('').reverse().join('').replace(/\s+/g, '');
	// console.log(reverseStr);
	// return this.toUpperCase().replace(/\s+/g, '') === reverseStr
	const sourceText = this.toUpperCase().replace(/\s+/g, '').split('');
	return sourceText.join('') === sourceText.reverse().join('')
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    if (marks.length === 0) {
    	return 0;
    }
    for (let i = 0; i < marks.length; i++) {
    	sum += marks[i];
    } 
    return Math.round(sum / marks.length);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = +new Date();
    const birthdayUser = +new Date(birthday);
    let diff = now - birthdayUser;
    let age = diff / 1000 / 3600 / 24 / 365.25;
    return age >= 18;
    // return verdict
}