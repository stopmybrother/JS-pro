// 4. Напишите программу на JavaScript для вычисления экспоненты числа.
// Примечание: Показатель числа говорит о том, сколько раз базовое число используется в качестве множителя. 
//8 2 = 8 x 8 = 64. Здесь 8 - основание, а 2 - показатель степени.

const raiseNumber = (numb: number, degree: number): number => {
    if (degree === 1) {
        return numb;
    } else {
      return numb * raiseNumber(numb, degree - 1);
    }
}

console.log(raiseNumber(8, 2)); // 64