// 0) протипизировать при помощи дженериков
interface IObj {
    [key: string]: string;
}
const objOne: IObj = {
    key1: "value1",
    key2: "value2",
}
const objTwo: IObj = {} 

function isEmptyObject<T> (obj: T): boolean {
    for(let key in obj){
        return false
    }
    return true
}

console.log(isEmptyObject<IObj>(objOne)); // false
console.log(isEmptyObject<IObj>(objTwo)); // true