// 2) написать reduce с нуля
// reduceFromScratch, которая принимает в себя функцию или условие, массив, аккумулятор

let array = [1, 2, 3, 4, 5];
let accumulator = 5;

let reduceAnArray = (array, accumulator) => {
	let previousValue = accumulator;
	let newArr = array.reduce((previousValue, currentValue, index, array) => {
		return previousValue + currentValue;
	}, previousValue);
	return newArr;
};

let reduceFromScratch = (funk, array, accumulator) => {
	return funk(array, accumulator);
};

console.log(reduceFromScratch(reduceAnArray, array, accumulator));