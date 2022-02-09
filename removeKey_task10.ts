// Написать функцию, которая принимает в себя объект в качестве первого аргумента и строку (=название одного из ключей объекта) в качестве второго аргумента, а в качестве результата возвращает новый объект уже без этого ключа.

interface keyValue5 {
	name: string;
	age: number;
	gender: string;
}

// 1 - first way

let obj: keyValue5 = {
	name: "Eve",
	age: 24,
	gender: "female",
};

let str: string = "name";

let removeKey = (obj: keyValue5, str: string): object => {
	let newObj: keyValue5 = Object.assign({}, obj);
	for (let key in newObj) {
		if (key === str) {
			delete newObj[key];
		}
	}
	return newObj;
};

console.log(removeKey(obj, str)); // { age: 24, gender: "female" }

// 2 - second way

let obj2: keyValue5 = {
	name: "Eve",
	age: 24,
	gender: "female",
};

let str2: string = "name";

let removeKey2 = (obj: keyValue5, str: string) => {
	let newObj: object = Object.keys(obj)
		.filter((key) => key !== str)
		.reduce((object, key) => {
			object[key] = obj[key];
			return object;
		}, {});
	return newObj;
};

console.log(removeKey2(obj2, str2)); // { age: 24, gender: "female" }