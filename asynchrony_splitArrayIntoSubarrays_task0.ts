// 1) дан массив произвольной длины (допустим, 27 любых элементов)
// нужно создать функцию, которая принимает 
//в качестве первого аргумента этот массив, 
//а второго - число, которая означает, какое максимальное количество элементов может входить в новые массивы, 
//на которые был разделен этот исходник
// пример
// const arr = [1,2,3,4,5,6,7,8]
// arrayDivider(arr, 3); 
// [[1,2,3], [4,5,6], [7,8]]

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayDivider = (array: number[], numb: number): number[][] => {
    let newArr: number[][] = [];
    for (let i: number = 0; i < array.length; i++) {
        const lastEl: number[] = newArr[newArr.length - 1];

        if (!lastEl || lastEl.length === numb) {
            newArr.push([array[i]]);
        } else {
            lastEl.push(array[i]);
        }
    }
    return newArr;
}; 

console.log(arrayDivider(array, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]] 