// 2)Получите целые числа в диапазоне
// Напишите программу на JavaScript, чтобы получить целые числа в диапазоне (x, y).
// Пример: диапазон (10, 18)
// Ожидаемый результат: [11,12,13,14,15,16,17]

const getArrayOfNumbers = (startValue: number, endValue: number): number[] => {
    if (endValue - startValue === 2) {
        return [startValue + 1];
    } else {
        let array: number[] = getArrayOfNumbers(startValue, endValue - 1);
        array.push(endValue - 1);
        return array
    }
}

console.log(getArrayOfNumbers(10, 18));