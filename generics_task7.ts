//7) написать функцию, которая будет принимать объект и изменять значение его свойства 
//при этом функция должна быть безопасной 
//(т.е если тип данных у свойства number, то менять его можно только на number)
type TArr = (number | string)[][]
interface IObject {
    name: string;
    surname: string;
    age: number;
    gender: string;
    children: boolean;
};

let object: IObject = {
    name: "Patric",
    surname: "Swon",
    age: 24,
    gender: "Male",
    children: false,
};

function changeValue<T extends Record<string, any>> (obj: T, key: keyof T, value: T[keyof T]): T {
    let arr: TArr = Object.entries(obj).map((item) => {
        if (item[0] === key && typeof item[1] === typeof value) {
            item[1] = value;
        }
        return item;
    });
    let newObj = Object.fromEntries(arr);
    return newObj
};

console.log(changeValue<IObject>(object, "children", true)); // {"name": "Patric", "surname": "Swon", "age": 24, "gender": "Male", "children": true}
console.log(changeValue<IObject>(object, "children", "true")); // {"name": "Patric", "surname": "Swon", "age": 24, "gender": "Male", "children": false}