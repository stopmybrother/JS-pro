// 11. Нужно написать функцию, которая возвращает длину передаваемого массива
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ["one", 2, true];

function getArrayLength<T>(array: T[]): number {
    return array.length;
};

console.log(getArrayLength<number>(array1));
console.log(getArrayLength<number | string | boolean>(array2));