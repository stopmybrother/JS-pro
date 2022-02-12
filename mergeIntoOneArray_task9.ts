// Напишите функцию, которая принимает массив массивов и соединяет их в один массив, у которого есть все элементы входных массивов.
// Ваш код
// → [1, 2, 3, 4, 5, 6]

let arrays: number[][] = [[1, 2, 3], [4, 5], [6]];

// 1 - first way - flat()

const mergeIntoOneArray1 = (array: number[][]): number[] => {
	let newArray: number[] = array.flat();

	return newArray;
};

console.log(mergeIntoOneArray1(arrays)); // → [1, 2, 3, 4, 5, 6]

// 2 - second way - reduce()

const mergeIntoOneArray2 = (array: number[][]): number[] => {
	let newArray: number[] = array.reduce(
		(accumulator, value) => accumulator.concat(value),
		[]
	);

	return newArray;
};

console.log(mergeIntoOneArray2(arrays)); // → [1, 2, 3, 4, 5, 6]

// 3 - third way - concat

const mergeIntoOneArray3 = (array: number[][]): number[] => {
	let newArray: number[] = [].concat(array);

	return newArray;
};

console.log(mergeIntoOneArray3(arrays)); // → [1, 2, 3, 4, 5, 6]

// 4 - fourth way - spread

const mergeIntoOneArray4 = (array: number[][]):number[] => {
	let newArray: number[] = array.reduce(
		(accumulator, value) => (accumulator.push(...value), accumulator),
		[]
	);

	return newArray;
};

console.log(mergeIntoOneArray4(arrays)); // → [1, 2, 3, 4, 5, 6]