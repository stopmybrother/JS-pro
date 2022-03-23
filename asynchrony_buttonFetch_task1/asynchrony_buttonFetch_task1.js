// 1. создать на js кнопку
// при нажатии на которую будет отправляться запрос на сервер
// при успешном возвращении информации она появится под кнопкой черным цветом в <p>, при неудачном - красным цветом так же

// в данном случае после получения ответа с сервера надо будет произвести доп стадию переведения его из формата json в формат обычного объекта js
// то есть
// const req = await fetch(https://jsonplaceholder.typicode.com/posts/1);
//     const data = req.json();
// return data

// // следует  обратить внимание на последовательность действий при переводе из формата json в обычный объект js
// let response = await fetch(url);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299 - получаем тело ответа
//     let json = await response.json();
// } else {
//     alert("Ошибка HTTP: " + response.status);
// }

const getResponse = async () => {
	let text = document.getElementById("text");
	let button = document.getElementById("button");

	const data = {
		post: {},
	};

	button.addEventListener("click", async (event) => {	
		try {
			let response = await fetch("https://jsonplaceholder.typicode.com/postss/1");

			if (!response.ok) {
				throw new Error(`${response.status}`)
			}
			
			data.post = await response.json();

			event.target.style.backgroundColor = "#000";
			event.target.style.color = "#fff";

			text.style.color = "#000";
			text.style.textAlign = "center";

			text.innerHTML = `${response.status} - everything is good. <br>
            body: ${data.post.body} <br>
            id: ${data.post.id} <br>
            title: ${data.post.title} <br>
            userId: ${data.post.userId} <br>`;
		} catch (err) {
			event.target.style.backgroundColor = "#ff0000";
			event.target.style.color = "#fff";

			text.style.color = "#ff0000";
			text.style.textAlign = "center";
			text.innerHTML = `${err}`;
		}
	});
};
getResponse();
