// 2) написать reduce с нуля
// reduceFromScratch, которая принимает в себя функцию или условие, массив, аккумулятор

let array = [1, 2, 3, 4, 5];
let accumulator = "";

let getString = (arr, accum) => {
	let str = accum;
	arr.forEach((item) => {
		str += item;
	});
	return str;
};

let reduceAnArray = (arr, accum) => {
	let str = getString(arr, accum);
	return str;
};

let reduceFromScratch = (funk, array, accumulator) => {
	return funk(array, accumulator);
};
console.log(reduceFromScratch(reduceAnArray, array, accumulator));
