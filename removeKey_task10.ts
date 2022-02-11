// Написать функцию, которая принимает в себя объект в качестве первого аргумента и строку (=название одного из ключей объекта) в качестве второго аргумента, а в качестве результата возвращает новый объект уже без этого ключа.

interface IObjPersonEve {
	name: string;
	age: number;
	gender: string;
}

let obj: IObjPersonEve = {
	name: "Eve",
	age: 24,
	gender: "female",
};

let str: string = "name";

// 1 - first way

let removeKey = (obj: IObjPersonEve, str: string): object => {
	let newObj: IObjPersonEve = Object.assign({}, obj);
	for (let key in newObj) {
		if (key === str) {
			delete newObj[key];
		}
	}
	return newObj;
};

console.log(removeKey(obj, str)); // { age: 24, gender: "female" }

// 2 - second way

let removeKey2 = (obj: IObjPersonEve, str: string) => {
	let newObj: object = Object.keys(obj)
		.filter((key) => key !== str)
		.reduce((object, key) => {
			object[key] = obj[key];
			return object;
		}, {});
	return newObj;
};

console.log(removeKey2(obj, str)); // { age: 24, gender: "female" }

// 3 - third way - clonning by spread (like first way)

let removeKey3 = (obj: IObjPersonEve, str: string): object => {
	let newObj: IObjPersonEve = {...obj};
	for (let key in newObj) {
		if (key === str) {
			delete newObj[key];
		}
	}
	return newObj;
};

console.log(removeKey3(obj, str)); // { age: 24, gender: "female" }