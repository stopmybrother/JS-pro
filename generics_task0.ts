// 0) протипизировать при помощи дженериков

interface IObj {
    [key: string]: any;
}

const objOne: IObj = {
    key1: "value1",
    key2: "value2",
}
const objTwo: IObj = {
    key: 8,
} 
const objThree: IObj = {}

function isEmptyObject<T extends Record<string, any>> (obj: T): boolean {
    for(let key in obj){
        return false
    }
    return true
}

console.log(isEmptyObject<IObj>(objOne)); // false
console.log(isEmptyObject<IObj>(objTwo)); // false
console.log(isEmptyObject<IObj>(objThree)); // true