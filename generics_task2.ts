//2) написать простую функцию, которая принимает массив и возвращает перевернутый массив.
type TNumber = number;
type TString = string;

const arr1: TNumber[] = [1, 2, 3];
const arr2: TString[] = ["dfff", "222"];

function getArrayReverse<T> (array: T[]): T[] {
    let newArr: T[] = array.reverse();
    return newArr;
};

console.log(getArrayReverse<TNumber>(arr1)); // [3, 2, 1] 
console.log(getArrayReverse<TString>(arr2)); // ["222", "dfff"] 