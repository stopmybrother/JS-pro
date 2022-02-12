//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// 1 - first way

let a: number = 3;
let b: number = 7;

const getMinValue = (firstValue: number, secondValue: number): number => {
	let minValue: number = Math.min(firstValue, secondValue);
	return minValue;
};

console.log(getMinValue(a, b)); // 3

// 2 - second way

let c: number = 15;
let d: number = 7;

const getMinValue2 = (firstValue: number, secondValue: number): number => {
	if (firstValue > secondValue) {
		return secondValue;
	} else {
		return firstValue;
	}
};

console.log(getMinValue2(c, d)); // 7
