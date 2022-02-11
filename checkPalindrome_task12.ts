// 2) написать функцию, которая позволяет узнать, является ли строка полиндромом или же нет (читается одинаково с двух сторон)

const str11: string = "шалаш";
const str22: string = "казак";
const str33: string = "слон";

// 1- first way

const checkPalindrome1 = (str: string): boolean => {
	let reverseString: string = str.split("").reverse().join("");
	if (str === reverseString) {
		return true;
	} else {
		return false;
	}
};

console.log(checkPalindrome1(str11)); // true
console.log(checkPalindrome1(str22)); // true
console.log(checkPalindrome1(str33)); // false

// 2 - second way

const checkPalindrome2 = (str: string): boolean => {
	let reverseString: string = str.split("").reverse().join("");
	return !!(str === reverseString);
};

console.log(checkPalindrome2(str11)); // true
console.log(checkPalindrome2(str22)); // true
console.log(checkPalindrome2(str33)); // false

// 3 - third way

const checkPalindrome3 = (str: string): boolean => {
	let reverseString: string = str.split("").reverse().join("");
	return Boolean(str === reverseString);
};

console.log(checkPalindrome3(str11)); // true
console.log(checkPalindrome3(str22)); // true
console.log(checkPalindrome3(str33)); // false