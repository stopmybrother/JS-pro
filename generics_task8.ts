// 8) написать функцию, которая ищет ключ по свойству
type TSring = string;
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

function findKey<T, S> (obj: T, value: string | number | boolean): S {
    let newObj: T = Object.assign(obj, {});
    for (let key in newObj) {
        if (newObj[key] === value) {
            return key;
        }
    }
};
console.log(findKey<IObject, TSring>(object2, 24)); // age
console.log(findKey<IObject, TSring>(object2, "Swon")); // surname
console.log(findKey<IObject, TSring>(object2, false)); // children
console.log(findKey<IObject, TSring>(object2, true)); // undefined