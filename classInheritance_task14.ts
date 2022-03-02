// Напишите родительский класс Person с обязательными полями name, age, и необязательным gender, метод printInfo, который выводит информацию о персоне в консоль. Класс Person сделайте абстрактным (см презентацию и доп материалы). 
enum Gender {
    male,
    female,
}

abstract class Person {
    abstract name: string;
    abstract age: number;
    abstract gender?: Gender;
    static ageOfGraduation: number = 18;
    static ageOfRetirement: number = 65;

    abstract printInfo(): void;
}

// Создайте от него дочерний класс Child, который содержит поле school и метод printChildInfo(), который выводит информацию про ребенка и в какую школу он ходит 2 разными полями в console.log(). Определите для него get метод, сколько ему осталось ходить в школу (до 18 лет)
class Child extends Person {
    name: string;
    age: number;
    gender?: Gender;
    school: string;
    constructor (name: string, age: number, school: string, ageOfGraduation: number, gender?: Gender) {
        super();
        this.name = name;
        this.age = age;
        this.school = school;
        this.gender = gender;
    }
    printInfo(): void {
        if (this.gender === Gender.male) {
            console.log(`My name's ${this.name} and I'm a boy. I'm ${this.age} years old.`);
            console.log(`I study at the ${this.school}.`);
        };
        if (this.gender === Gender.female) {
            console.log(`My name's ${this.name} and I'm a woman. I'm ${this.age} years old.`);
            console.log(`I study at the ${this.school}.`);
        };
        if (!this.gender) {
            console.log(`My name's ${this.name}. I'm ${this.age} years old.`);
            console.log(`I study at the ${this.school}.`);
        }
    }
    get getNumberOfYearsUntilGraduation(): number {
        let numberOfYearsUntilGraduation = Person.ageOfGraduation - this.age;
        return numberOfYearsUntilGraduation;
    }
};

let child: Person = new Child("Addy", 12, "PM-school", Gender.male);
child.printInfo();
console.log(child.getNumberOfYearsUntilGraduation) // ? Property 'getNumberOfYearsUntilGraduation' does not exist on type 'Person'.

// Создайте от него дочерний класс Adult, который содержит поле work и метод printAdultInfo(), который выводит информацию про взрослого и кем он работает 2 разными полями в console.log(). Определите для него get метод, сколько ему осталось до пенсии (до 65 лет)

class Adult extends Person {
    name: string;
    age: number;
    gender?: Gender;
    work: string;
    constructor (name: string, age: number, work:string, ageOfRetirement: number, gender?: Gender) {
        super();
        this.name = name;
        this.age = age;
        this.work = work;
        this.gender = gender;
    }
    printInfo(): void {
        if (this.gender === Gender.male) {
            console.log(`My name's ${this.name} and I'm a man. I'm ${this.age} years old.`);
            console.log(`My profession is ${this.work}.`);
        };
        if (this.gender === Gender.female) {
            console.log(`My name's ${this.name} and I'm a woman. I'm ${this.age} years old.`);
            console.log(`My profession is ${this.work}.`);
        };
        if (!this.gender) {
            console.log(`My name's ${this.name}. I'm ${this.age} years old. My profession is ${this.work}.`);
        }
    }
    get getNumberOfYearsUntilRetirement(): number {
        let numberOfYearsUntilRetirement = Person.ageOfRetirement - this.age;
        return numberOfYearsUntilRetirement;
    }
}
let adult: Person = new Adult("Gregory", 42, "engeneer", Gender.male);
adult.printInfo();
console.log(adult.getNumberOfYearsUntilRetirement) // ? Property 'getNumberOfYearsUntilRetirement' does not exist on type 'Person'.