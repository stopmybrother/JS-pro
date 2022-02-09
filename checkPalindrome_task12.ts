// 2) написать функцию, которая позволяет узнать, является ли строка полиндромом или же нет (читается одинаково с двух сторон)

const str1: string = "шалаш";
const str2: string = "казак";
const str3: string = "слон";

const checkPalindrome = (str: string): boolean => {
	let reverseString: string = str.split("").reverse().join("");
	if (str === reverseString) {
		return true;
	} else {
		return false;
	}
};

console.log(checkPalindrome(str1)); // true
console.log(checkPalindrome(str2)); // true
console.log(checkPalindrome(str3)); // false