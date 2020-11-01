//---------------------------------------Задача 1-------------------------------------------------
function parseCount(value) {
	const parseCount = Number.parseInt(value)
	if (isNaN(parseCount)) {
		throw new Error("Невалидное значение");
	}
	return parseCount//Number.parseInt(value);
}

function validateCount(value) {
	try { 
		return parseCount(value);
	} catch (e) {
		return e;
	}
}
// console.log(parseCount("123"));
// console.log(parseCount(123));
// console.log(parseCount("fs123"));

//----------------------------------------Задача 2-----------------------------------------------------
class Triangle {
	constructor (a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	getPerimeter() {
		return Number(this.a + this.b + this.c);
	}
	getArea() {
		let p = this.getPerimeter() / 2;
		return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
		
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			getPerimeter() {
				return 'Ошибка! Треугольник не существует'
			},
			getArea() {
				return 'Ошибка! Треугольник не существует'
			}
		}
	} 
}
// console.log(newTriangle.getPerimeter(a, b, c) = "Ошибка! Треугольник не существует")
 //const newTriangle = new Triangle(3, 4, 5);
 //console.log(newTriangle.getPerimeter(3, 4, 1))
// console.log(newTriangle.getArea(3, 4, 5))
//console.log(getTriangle(1, 1, 5))
