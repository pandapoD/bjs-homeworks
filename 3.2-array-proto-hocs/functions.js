const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

//---1---
const getNames = () => weapons.map(number => number.name); 
console.log(getNames());


// function getNames (number, i, arr) {
// 	//console.log({name: arr[i].name});
// 	return arr[i].name
// }
// console.log(weapons.map(getNames));


//---2---
const getCountReliableWeapons = (durability) => weapons.filter(weapon => weapon.durability > durability).length;
console.log(getCountReliableWeapons(300));


//---3---
const hasReliableWeapons = (durability) => weapons.some(weapon => weapon.durability > durability);
console.log(hasReliableWeapons(900));


//---4---
const getReliableWeaponsNames = (durability) => weapons.filter(weapon => weapon.durability > durability).map(number => number.name);
console.log(getReliableWeaponsNames(200));


//---5---
const getTotalDamage = () => {
	return weapons.reduce((totalDamage, number) => {
		return totalDamage + number.attack
	}, 0)}; 
console.log(getTotalDamage());

// //---6---
const getValuestCountToSumValues = (arrayNumbers, setValue) => {
	let sum = 0;
	let num = 0;
	return arrayNumbers.reduce((objAccumulator, number, index) => {
		objAccumulator = {sumNumbers: sum, quantityNum: num};
		if (objAccumulator.sumNumbers < setValue) {
			objAccumulator.sumNumbers[sum += number]; 
			objAccumulator.quantityNum[num = index + 1];
			//console.log(objAccumulator.quantityNum);
			return objAccumulator.quantityNum;
		}
		//console.log(objAccumulator);
		return objAccumulator.quantityNum;
	}, sum)
}
console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));


//--------------------------------------Задача №2----------------------------------------------------------
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(200);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);

//console.log(compareArrays([8, 9], [6])); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

// const memorize = (fn, limit) => {

//---------2.1-------------
//let memorize = () => () => {}
//const resultFunction = memorize();
//resultFunction(); // <= должно вызываться без ошибок

//---------2.2-------------
// let memorize = () => (...args) => console.log(...args)

// const resultFunction = memorize();
// resultFunction(1,2,3,4); // <= должно вывести: 1,2,3,4

//---------2.3-------------
// const memorize = (abc) => abc = (a) => a ** 2

// const resultFunction = memorize(a => a ** 2);
// console.log(resultFunction(2)); // <= должно вывести: 4
// console.log(resultFunction(5)); // <= должно вывести: 25


//---------2.4--------------
// let memory = [
//   {
//     args: [3, 4],
//     result: 7
//   },
//   {
//     args: [1, 3],
//     result: 4
//   }
// ];

// function memorize(mSum) {
// 	return function mSum(a, b) {
// 		return a + b
// 	}
// }

function memorize(arithmeticOperations, limit) {
	let memory = [];
	return function(...args){
		let array2 = [...args];
		let memoryFind = memory.find(number => compareArrays(number.args, array2));
		if (memoryFind !== undefined) {
			console.log('Значение сохранено в памяти');
			return memoryFind.result;
		} else {
			console.log('Ничего не найдено в памяти');
			memory.push({args: array2, result: arithmeticOperations (...args)});
			//console.log(memory);
			if (memory.length > limit) {
			memory.slice(0, limit);
			}	
			return arithmeticOperations (...args)
		}
	}
	
};

//const resultFunction = memorize((a,b) => a + b, 10);
// const mMux = memorize((a,b) => a * b, 10)
// mMux (3,8)
// resultFunction(3,4); // <= должно вывести: 7
// resultFunction(2,6); // <= ничего не найдёт в памяти.
// resultFunction(8,3);
// resultFunction(1,3);
// resultFunction(5,6);
// resultFunction(7,1);

const testCase = (testFunction, functionTime) => {

//let functionTime = 'Время выполнения скрипта';
console.time(functionTime);
	for (let z = 0, z < initialArray.length, z++) {
		initialArray[z].forEach(function(item) {
			testFunction(...args)
		})
	}
	console.timeEnd(functionTime);

}

let initialArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
