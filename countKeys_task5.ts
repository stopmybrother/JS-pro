// Напишите функцию count(obj), которая принимает объект и возвращает количество свойств объекта:

// 1 - first way

let user1: object = {
	name: "John",
	age: 30,
};

let countKeys1 = (obj: object): number => {
	let numberOfKeys: number = Object.keys(obj).length;
	return numberOfKeys;
};

console.log(countKeys1(user1)); // 2

// 2 - second way

let user2: object = {
	name: "John",
	age: 30,
	gender: 'male'
};

const countKeys2 = (obj: object): number => {
    let counter: number = 0;
	for (let key in obj) {
		counter++;
	}
    return counter;
};

console.log(countKeys2(user2)); // 3