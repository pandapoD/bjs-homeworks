const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

//---1---
const getNames = () => {
	return weapons.map(number => {return number.name})
}; 
console.log(getNames());


// function getNames (number, i, arr) {
// 	//console.log({name: arr[i].name});
// 	return arr[i].name
// }
// console.log(weapons.map(getNames));


//---2---
const getCountReliableWeapons = (durability) => {
	return weapons.filter(weapon => {
		return weapon.durability > durability;
	}).length
};
console.log(getCountReliableWeapons(300));


//---3---
const hasReliableWeapons = (durability) => {
	return weapons.some(weapon => {
		return weapon.durability > durability;
	})
};
console.log(hasReliableWeapons(900));


//---4---
const getReliableWeaponsNames = (durability) => {
	return weapons.filter(weapon => {
		return weapon.durability > durability;
	}).map(number => {return number.name})
};
console.log(getReliableWeaponsNames(200));


//---5---
const getTotalDamage = () => {
	return weapons.reduce((totalDamage, number) => {
		return totalDamage + number.attack
	}, 0)}; 
console.log(getTotalDamage());

// //---6---
let arrayNumbers = [];
const getValuestCountToSumValues = (arrayNumbers, setValue) => {
	return arrayNumbers.reduce((sumNumbers, number, index) => {
		sumNumbers += number;
		if(sumNumbers >= setValue) {
			return index + 1;
			//break;
		} else {
			return sumNumbers;
		}
	}, 0)
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

function compareArrays (arr1, arr2) {
	return arr1.every((number, index) => {
		return number === arr2[index];
	})
}

//console.log(compareArrays([8, 9], [6])); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

// const memorize = (fn, limit) => {

// }

// const resultFunction = memorize();
// function memorize() {
// 	return sum(...args);
// }

// console.log(resultFunction); // <= должно вызываться без ошибок