// 4. Что выведется в консоль? (ответ пояснить словами в комментариях)
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);

Promise.resolve().then(() => {
    console.log(4);
})

console.log(5);

while('') {
    console.log(6); // ничего не будет
}

console.log(7);

// Вывод в консоль:
// 1
// 3
// 5
// 7
// 4
// 2

//Пояснение:
// первым выйдет 1, так как лог синхронный
// setTimeOut с 2 уйдет в web API
// вторым выйдет 3, так как опять же лог синхронный
// Promise тоже уйдет в web API, но не пропустит setTimeOut
// за ней выйдет 5 по той же причине, что 1 и 3
// while с пустой строкой ничего не выведет - у него должно быть условие какое-то. Не поняла к чему там пустая строка, если в данном случае он определен глобально
// потом опять синхронный лог с 7
// и теперь promise и setTimeOut
// promise с 4 выйдет первый, так как .then проходит через очередь микрозадач
// а сам setTimeOut будет последним, так как он является макрозадачей