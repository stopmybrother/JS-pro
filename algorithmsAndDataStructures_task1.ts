// задача 1
//решить задачу минимум 2 способами и определить их временную сложность
//Дан массив [1,5,87,6]. нужно написать функцию, которая будет складывать все элементы массива и возвращать сумму

const array: number[] = [1, 5, 87, 6];

const getSum1 = (array: number[]): number => {
    return array.reduce((acc, item) => acc + item, 0); // 1
}
console.log(getSum1(array)); 

const getSum2 = (array: number[]): number => {
    let sum: number = 0; // 1
    [...array].forEach((item) => {
        sum += item; // 4
    }); // 1
    return sum; // 1
}
console.log(getSum2(array)); // 7