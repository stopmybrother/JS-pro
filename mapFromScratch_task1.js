// 1) написать map с нуля
// создать функцию mapFromScratch, которая должна принимать в себя функцию в качестве первого аргумента
// массив, к каждому элементу которого должна применяться эта функция, в качестве второго аргумента
// на выходе должен выходить массив элементов - результатов применения функции к каждому из элементов изначального массива


let array = [1, 2, 3, 4, 5];

let multiplyByThree = (item) => {
	return item * 3;
};

let mapAnArray = (arr) => {
	let newArray = [];

	arr.forEach((item) => {
		newArray.push(multiplyByThree(item));
	});
	return newArray;
};

let mapFromScratch = (funk, array) => {
	return funk(array);
};
console.log(mapFromScratch(mapAnArray, array));
