// задача 8 - написать функцию для рекурсивного копирования объекта и всех вложенных структур. Использовать для примера объект следующей структуры
interface IObj {
    [key: string]: any;
}
const obj: IObj = {
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

function getCopyOfObj<T extends Record<string, any>> (obj: T): T {
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
console.log("newObj", getCopyOfObj<IObj>(obj));