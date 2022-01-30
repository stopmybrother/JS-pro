// 1) написать map с нуля
// создать функцию mapFromScratch, которая должна принимать в себя функцию в качестве первого аргумента
// массив, к каждому элементу которого должна применяться эта функция, в качестве второго аргумента
// на выходе должен выходить массив элементов - результатов применения функции к каждому из элементов изначального массива

//1-ый способ
let array = [1, 2, 3, 4, 5];

let mapAnArray = (arr) => {
	let newArray = [];
	arr.forEach((item) => {
		newArray.push(item * 3);
	});
	return newArray;
};

let mapFromScratch = (funk, array) => {
	return funk(array);
};
console.log(mapFromScratch(mapAnArray, array));


//2-ой способ
let array = [1, 2, 3, 4, 5];

let mapAnArray = (arr) => {
	let newArr = arr.map((item) => item * 3);
	return newArr;
};

let mapFromScratch = (funk, array) => {
	return funk(array);
};
console.log(mapFromScratch(mapAnArray, array));