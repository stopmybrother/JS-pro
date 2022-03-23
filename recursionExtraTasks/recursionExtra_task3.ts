// 3)Напишите программу на JavaScript для вычисления суммы массива целых чисел.
// Пример: var array = [2, 3, 4, 5, 6, 7]
// Ожидаемый результат: 27

const array: number[] = [2, 3, 4, 5, 6, 7];

const getSum = (array: number[]): number => {
    if (array.length === 1) {
        console.log(array)
        return array[0];
    } else {
        console.log(array)
        return array.pop() + getSum(array);
    }
};

console.log(getSum(array));