// задача 8 - написать функцию для рекурсивного копирования объекта и всех вложенных структур. Использовать для примера объект следующей структуры

const obj = {
	a: 1,
    b: 'abc',
    c: true,
    d: {
        r: 2,
        m: 'qwerty',
        y: false,
		p: { 
            m: 4,
            n: 'asdf'
		}
    }
}

const getCopyOfObj = (obj) => {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = getCopyOfObj(obj[key]);
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj;
}
console.log("obj", obj);
console.log("newObj", getCopyOfObj(obj));