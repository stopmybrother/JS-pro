// Создайте класс Weather и наследуйте его от интерфейса с обязательными полями temperature и pressure и необязательным humidity, а также методом, который должен выводить все данные в консоль
interface IWeather {
    temperature: number;
    pressure: number;
    humidity?: number;
}
class Weather implements IWeather {
    temperature: number;
    pressure: number;
    humidity?: number;
    
    constructor(temperature: number, pressure: number, humidity: number) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
    }

    getInfoAboutWeather(): void {
        if (this.humidity) {
            console.log(`Now temperature is ${this.temperature} degrees Celcius. Pressure is ${this.pressure}. Humidity is ${this.humidity}`);
        } else {
            console.log(`Now temperature is ${this.temperature} degrees Celcius. Pressure is ${this.pressure}.`);
        }
    }
}

const weather = new Weather(25, 80, 30);
weather.getInfoAboutWeather();