//Вычислить сумму чисел до данного
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

const sumTo = (arg: number): number => {
    if (arg === 1) {
        return arg;
    } else {
        return arg + sumTo(arg - 1);
    }
};

console.log(sumTo(100)) // 5050