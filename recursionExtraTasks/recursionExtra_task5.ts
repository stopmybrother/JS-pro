// 5. Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.
// Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... 
//Каждое последующее число является суммой двух предыдущих.
// В качестве аргументов в функцию принимаем количество выводимых чисел и массив, с которого мы начинаем fibonacci(8, [0, 1]

const getNFibonacciNumbers = (numb: number, array: number[]): number[] => {
    if (numb === 2) {
        return array;
    } else {
        array.push(array[array.length - 2] + array[array.length - 1])
        return getNFibonacciNumbers(numb - 1, array);
    }
};

console.log(getNFibonacciNumbers(8, [0, 1]));