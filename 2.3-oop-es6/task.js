'use strict'
class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = 1.5 * this.state;	
	}
	set state(newState) {
		if (newState <= 0) {
			this._state = 0;
		} else if (newState >= 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount) 
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount) 
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount); 
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount); 
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super (author, name, releaseDate, pagesCount); 
		this.type = "detective";
	}
}

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15

//-----------------------------------Задача 2--------------------------------------------------------------------
class Library {
	constructor (name, books) {
		this.name = name;
		this.books = [];	
	}

	addBook (book) {
		if (book._state >= 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; this.books.length > i; i++) {
			for (let key in this.books[i]) {
				if (key === type && this.books[i][key] === value) {
					return this.books[i]; 
				}
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		let giveBook;
		//let h; 
		for (let i = 0; this.books.length > i; i++) {
			for (let key in this.books[i]) {
				if (this.books[i][key] === bookName) {
					console.log(this.books[i]); 
					giveBook = this.books.indexOf(this.books[i]);
					//console.log(giveBook)
					return this.books.splice(giveBook, 1)[0]
					//console.log(h);
					//console.log(h[0])
				}
			}
		}
		return null;
	}
}

const library = new Library("Библиотека имени Ленина");

//console.log(library.findBookBy());

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("Проклятие Капистрано", "Джонстон Маккалли", 1919, 360))
console.log(library.books);
// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log(library.findBookBy("releaseDate", 1919).name); //Проклятие Капистрано

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 5
library.giveBookByName("Проклятие Капистрано");
const kapistrano = new PrintEditionItem("Проклятие Капистрано", 1919, 360);
console.log(kapistrano.state); //100
kapistrano.fix();
console.log(kapistrano.state); //100
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 4

//----------------------------------------------Задача 3-----------------------------------------------------
class StudentLog {
	constructor (name) {
		this.name = name;
		this.objDrade = {};
		//this.arrTotal = [];
	}
	getName(name) {
		return this.name;
	}
	addGrade(grade, subject) {
		console.log(this.objDrade);
		if (grade >= 1 && grade <=5) {
			//this.objDrade = {};
			for (let key in this.objDrade) {
				if (key === subject) {
					this.objDrade[subject].push(grade);
					return this.objDrade[subject].length;
				} 
			}      
			this.objDrade[subject] = [grade];
			console.log(this.objDrade[subject])
			return this.objDrade[subject].length;
		}
		console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
		for (let key in this.objDrade) {
			if (key === subject) {
				return this.objDrade[subject].length;
			} 
		}
		this.objDrade[subject] = [];
		return this.objDrade[subject].length;
	}
	getAverageBySubject(subject) {
		let sum = 0;
		if (this.objDrade[subject].length === 0) {
			return 0;
		}

		for (let i = 0; i < this.objDrade[subject].length; i++) {
			sum = sum + this.objDrade[subject][i];
		} 
		return sum / this.objDrade[subject].length;
	}
	getTotalAverage() {
		//let arrTotal = {total: []};
		let arrTotal = [];

		for (let key in this.objDrade) {
			arrTotal.push(this.getAverageBySubject(key));
		}

		if (arrTotal.length === 0) {
			return 0;
		}

		//return this.getAverageBySubject(Object.keys(arrTotal)[0]) / arrTotal.total.length;
		let sum = 0;
		for (let i = 0; i < arrTotal.length; i++) {
			sum = sum + arrTotal[i];
		} 
		return sum / arrTotal.length;
	}
}
const log = new StudentLog('Олег Никифоров');
// console.log(log.getName()) // Олег Никифоров

// console.log(log.addGrade(3, 'algebra'));
// // 1

// console.log(log.addGrade('отлично!', 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0
// console.log(log.addGrade(4, 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0
// console.log(log.addGrade('отлично!', 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0

// console.log(log.addGrade(4, 'algebra'));
// // 2

// console.log(log.addGrade(5, 'geometry'));
// // 1

// console.log(log.addGrade(25, 'geometry'));
// // Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// // 1

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
// console.log(log.objDrade);

console.log(log.getTotalAverage()); // 3,75