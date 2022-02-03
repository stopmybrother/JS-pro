// Написать функцию, которая принимает в себя объект в качестве первого аргумента и строку (=название одного из ключей объекта) в качестве второго аргумента, а в качестве результата возвращает новый объект уже без этого ключа.

// 1 - first way

let obj: object = {
	name: "Eve",
	age: 24,
	gender: "female",
};

let str: string = "name";

let removeKey = (obj: object, str: string): object => {
	for (let key in obj) {
		if (key === str) {
			delete obj[key];
		}
	}
	return obj;
};

console.log(removeKey(obj, str)); // { age: 24, gender: "female" }

// 2 - second way

let obj2: object = {
	name: "Eve",
	age: 24,
	gender: "female",
};

let str2: string = "name";

let removeKey2 = (obj: object, str: string) => {
	let newObj: object = Object.keys(obj)
		.filter((key) => key !== str)
		.reduce((object, key) => {
			object[key] = obj[key];
			return object;
		}, {});
	return newObj;
};

console.log(removeKey2(obj2, str2)); // { age: 24, gender: "female" }