// 0) протипизировать при помощи дженериков

type TObj = Record<string, unknown>;

const objOne: TObj = {
    key1: "value1",
    key2: "value2",
}
const objTwo: TObj = {
    key: 8,
} 
const objThree: TObj = {}

function isEmptyObject<T> (obj: T): boolean {
    for(let key in obj){
        return false
    }
    return true
}

console.log(isEmptyObject<TObj>(objOne)); // false
console.log(isEmptyObject<TObj>(objTwo)); // false
console.log(isEmptyObject<TObj>(objThree)); // true