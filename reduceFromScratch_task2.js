// 2) написать reduce с нуля
// reduceFromScratch, которая принимает в себя функцию или условие, массив, аккумулятор

//1-ый способ
let array = [1, 2, 3, 4, 5];
let accumulator = 5;

let reduceAnArray = (arr, accum) => {
	let sum = 0;

	arr.forEach((item) => {
		sum += item;
	});
	return accum + sum;
};

let reduceFromScratch = (funk, array, accumulator) => {
	return funk(array, accumulator);
};
console.log(reduceFromScratch(reduceAnArray, array, accumulator));


//2-ой способ
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