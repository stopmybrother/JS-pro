// 2) напишите функцию, которая будет принимать в себя 
// первым аргументом - массив запросов вида
    // [https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/albums/1, https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/comments/1, https://jsonplaceholder.typicode.com/photos/1] (это все строки!!!), 
// вторым аргументом - число, которое означает, какое максимальное количество элементов может входить в новые массивы, на которые будет разделен этот исходник (то есть для решения второй задачи сначала надо решить первую - тк функция выше точно так же будет разделять наш массив),
// и по разделенным группам запросов будут отправляться параллельные запросы на сервер

// например
// createGroupParallelRequests(arrays, 2);
    // массив внутри будет делиться на группы массивов по 2
    // и эти группы последовательно будут отправлять запросы (в рамках группы параллельные)
// то есть 
    // [https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/albums/1, https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/comments/1, https://jsonplaceholder.typicode.com/photos/1]
// разделиться на 
    // [[https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/albums/1],
    //[ https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/comments/1],
    //[https://jsonplaceholder.typicode.com/photos/1]]

    
// первыми отправятся параллельные одновременные запросы
    // [https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/albums/1]
// только после их окончания
    // [ https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/comments/1]
// а после их окончания 
    // [https://jsonplaceholder.typicode.com/photos/1]
// результаты всех запросов помещаются в конечный массив

// в данном случае после получения ответа с сервера надо будет произвести доп стадию переведения его из формата json в формат обычного объекта js
// то есть
    // const req = await fetch(https://jsonplaceholder.typicode.com/posts/1);
    // const data = req.json();
    // return data

// -----------------------------------------------

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

const array = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/albums/1", "https://jsonplaceholder.typicode.com/users/1", "https://jsonplaceholder.typicode.com/comments/1", "https://jsonplaceholder.typicode.com/photos/1"];

const createGroupParallelRequests = async (array, numb) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        const lastEl = newArr[newArr.length - 1];

        if (!lastEl || lastEl.length === numb) {
            newArr.push([array[i]]);
        } else {
            lastEl.push(array[i]);
        }
    }

    const data = {
        result: [],
    }

    newArr.map(async (array) => {
        for await (let item of array) {
            item = await (await fetch(item)).json();
            data.result.push(item);
        }
    });
    console.log("data", data);
}
console.log(createGroupParallelRequests(array, 2));