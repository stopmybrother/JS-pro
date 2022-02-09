// Напишите функцию, которая принимает массив массивов и соединяет их в один массив, у которого есть все элементы входных массивов.
// Ваш код
// → [1, 2, 3, 4, 5, 6]

// 1 - first way

let arrays: number[][] = [[1, 2, 3], [4, 5], [6]];

const mergeIntoOneArray = (array: number[][]): number[] => {
	let newArray: number[] = array.flat();

	return newArray;
};

console.log(mergeIntoOneArray(arrays)); // → [1, 2, 3, 4, 5, 6]

// 2 - second way

let arrays2: number[][] = [[1, 2, 3], [4, 5], [6]];

const mergeIntoOneArray2 = (array: number[][]): number[] => {
	let newArray: number[] = array.reduce(
		(accumulator, value) => accumulator.concat(value),
		[]
	);

	return newArray;
};

console.log(mergeIntoOneArray2(arrays2)); // → [1, 2, 3, 4, 5, 6]

// 3 - third way

let arrays3: number[][] = [[1, 2, 3], [4, 5], [6]];

const mergeIntoOneArray3 = (array: number[][]): number[] => {
	let newArray: number[] = [].concat(...array);

	return newArray;
};

console.log(mergeIntoOneArray3(arrays3)); // → [1, 2, 3, 4, 5, 6]

// 4 - fourth way

let arrays: number[][] = [[1, 2, 3], [4, 5], [6]];

const mergeIntoOneArray = (array: number[][]):number[] => {
	let newArray: number[] = array.reduce(
		(accumulator, value) => accumulator.concat(...value),
		[]
	);

	return newArray;
};

console.log(mergeIntoOneArray(arrays)); // → [1, 2, 3, 4, 5, 6]