// написать функцию check, которая определяет, состоят ли слова из одинаковых букв (как качественно, так и количественно)
// check('кот', 'ток', 'отк') // true
// check('кот', 'ток', 'отко') // false

let str1: string = "кот";
let str2: string = "ток";
let str3: string = "отк";

let checkWordsForAnagram = (...args: string[]): boolean => {
	let array: string[] = [];
	array.push(...args);

	let str: string = array[0].split("").sort().join("");

	for (let i: number = 1; i < array.length; i++) {
		if (array[i].split("").sort().join("") !== str) {
			return false;
		}
	}

	return true;
};

console.log(checkWordsForAnagram(str1, str2, str3)); // true