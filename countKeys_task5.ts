// Напишите функцию count(obj), которая принимает объект и возвращает количество свойств объекта:

interface keyValue3 {
	name: string;
	age: number;
	gender?: string;
}

// 1 - first way

let user1: keyValue3 = {
	name: "John",
	age: 30,
};

let countKeys1 = (obj: keyValue3): number => {
	let numberOfKeys: number = Object.keys(obj).length;
	return numberOfKeys;
};

console.log(countKeys1(user1)); // 2

// 2 - second way

let user2: keyValue3 = {
	name: "John",
	age: 30,
	gender: 'male'
};

const countKeys2 = (obj: keyValue3): number => {
    let counter: number = 0;
	for (let key in obj) {
		counter = counter + 1;
	}
    return counter;
};

console.log(countKeys2(user2)); // 3