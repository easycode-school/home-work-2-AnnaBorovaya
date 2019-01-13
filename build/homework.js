class Car {
    constructor() {
        this.mileage = 0;
        this.fuel = 0;
    }
}
/*Первый вариант*/
class Honda extends Car {
    /**
     * drive - метод который вычисляет:
     * 1. колличество общего пробега машины в зависимости от проеханного киллометража
     * 2. колличество оставшегося бензина в машине
     * @param valueAddMileage number
     */
    drive(valueAddMileage) {
        this.mileage = this.mileage + valueAddMileage;
        this.fuel = this.fuel - valueAddMileage * Honda.expenseFuel;
        if (this.fuel <= 0) return console.log('Вам необходимо заправиться');
    }
    ;
    /**
     * refuel - метод который вычисляет: колличество бензина в машине при заправке
     * @param valueAddFuel number
     */
    refuel(valueAddFuel) {
        this.fuel = this.fuel + valueAddFuel;
    }
    ;
    /**
     * resFuel - метод для получения значения protected свойства fuel
     */
    get resFuel() {
        return this.fuel;
    }
    ;
    /**
     * resMileage - метод для получения значения protected свойства mileage
     */
    get resMileage() {
        return this.mileage;
    }
    ;
}
Honda.expenseFuel = 0.07;
/*Второй вариант*/
class Matiz extends Car {
    constructor() {
        super(...arguments);
        this.opportunityDrive = 0;
    }
    /**
     * drive - метод который вычисляет:
     * 1. Возможное колличество километров, которые автомобиль имеет возможность проехать с имеющимся у него колличеством бензина
     * 2. Если возможное колличество километров меньше желаемого колличества, то общий пробег составит - текущее значение плюс возможное,
     * а колличество бензина составит ноль.
     * 2. Если возможное колличество километров больше желаемого колличества, то общий пробег составит текущее значение плюс желаемое,
     * а колличество бензина составит текущее значение минус затраченное на проезд желаемого колличества килллометров
     * @param valueAddMileage number
     */
    drive(valueAddMileage) {
        this.opportunityDrive = this.fuel / Matiz.expenseFuel;
        if (this.opportunityDrive <= valueAddMileage) {
            this.mileage = this.mileage + this.opportunityDrive;
            this.fuel = 0;
            return console.log('Вам необходимо заправиться');
        }
        this.mileage = this.mileage + valueAddMileage;
        this.fuel = this.fuel - valueAddMileage * Matiz.expenseFuel;
    }
    ;
    /**
     * refuel - метод который вычисляет: колличество бензина в машине при заправке
     * @param valueAddFuel number
     */
    refuel(valueAddFuel) {
        this.fuel = this.fuel + valueAddFuel;
    }
    ;
    /**
     * resFuel - метод для получения значения protected свойства fuel
     */
    get resFuel() {
        return this.fuel;
    }
    ;
    /**
     * resMileage - метод для получения значения protected свойства mileage
     */
    get resMileage() {
        return this.mileage;
    }
    ;
}
Matiz.expenseFuel = 0.1;
