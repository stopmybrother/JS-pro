//Напишите класс User, который содержит обязательное неизменяемое поле name, обязательное обычное поле age,
//метод print() - который выводит в консоль имя и возраст, метод happyBirthday, который увеличивает возраст на 1 год.

class User {
    readonly name: string;
    age: number;
	constructor(userName: string, userAge: number) {
		this.name = userName;
		this.age = userAge;
	}
	print(): void {
		console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
	}
	happyBirthday(): void {
        this.age = this.age + 1;
		console.log(`Today is my Birthday. Now I'm ${this.age} years old.`);
	}
}

let user = new User("Latisha", 25);
user.print(); // My name is Latisha and I'm 25 years old.
user.happyBirthday(); // Today is my Birthday. Now I'm 26 years old.
console.log(user); // User: {"name": "Latisha", "age": 26} 