// 2) написать reduce с нуля
// reduceFromScratch, которая принимает в себя функцию или условие, массив, аккумулятор

let array = [1, 2, 3, 4, 5];
let accumulator = 5;

let getSum = (arr) => {
	let sum = 0;
	arr.forEach((item) => {
		sum += item;
	});
	return sum;
};

let reduceAnArray = (arr, accum) => {
	let sum = getSum(arr);
	return sum + accum;
};

let reduceFromScratch = (funk, array, accumulator) => {
	return funk(array, accumulator);
};
console.log(reduceFromScratch(reduceAnArray, array, accumulator));
