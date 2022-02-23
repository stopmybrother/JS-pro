// 8) написать функцию, которая ищет ключ по свойству
interface IObject {
    name: string;
    surname: string;
    age: number;
    gender: string;
    children: boolean;
};

let object2: IObject = {
    name: "Patric",
    surname: "Swon",
    age: 24,
    gender: "Male",
    children: false,
};

function findKey<T, S extends T[keyof T]> (obj: T, value: S): keyof T | T {
    for (let key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return obj;
};
console.log(findKey<IObject, IObject[keyof IObject]>(object2, 24)); // age
console.log(findKey<IObject, IObject[keyof IObject]>(object2, "Swon")); // surname
console.log(findKey<IObject, IObject[keyof IObject]>(object2, false)); // children
console.log(findKey<IObject, IObject[keyof IObject]>(object2, true));