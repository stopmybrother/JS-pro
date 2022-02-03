//Напишите функцию isEmpty(obj), которая принимает в себя объект и возвращает true, если у объекта нет свойств, иначе false.

// 1 - first way

let emptyObj: object = {};
let fullObj: object = {
	keyOne: "valueOne",
	keyTwo: "valueTwo",
};

const getEmptyObject = (obj: object): boolean => {
	if (Object.keys(obj).length > 0) {
		return false;
	} else {
		return true;
	}
};

console.log(getEmptyObject(emptyObj)); //true because the emptyObj-object is empty
console.log(getEmptyObject(fullObj)); //false because there are keys in the fullObj object

// 2 - second way

let emptyObj2: object = {};
let fullObj2: object = {
	keyOne: "valueOne",
	keyTwo: "valueTwo",
};
const getEmptyObject2 = (obj: object): boolean => {
	for (let key in obj) {
		return false;
	}
	return true;
};

console.log(getEmptyObject2(emptyObj2)); //true because the emptyObj-object is empty
console.log(getEmptyObject2(fullObj2)); //false because there are keys in the fullObj object