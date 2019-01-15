abstract class Car{
    public abstract drive(valueAddMileage: number): void;
    public abstract refuel(valueAddFuel: number): void;
    protected  mileage: number = 0;
    protected fuel: number = 0;
}

/*Первый вариант*/
class Honda extends Car {

    protected static expenseFuel: number = 0.07;
    
    /**
     * drive - метод который вычисляет:
     * 1. колличество общего пробега машины в зависимости от проеханного киллометража
     * 2. колличество оставшегося бензина в машине
     * @param valueAddMileage number
     */
    public drive(valueAddMileage: number): void {
        this.mileage += valueAddMileage;
        this.fuel = this.fuel - valueAddMileage * Honda.expenseFuel;
        if (this.fuel <= 0) return console.log('Вам необходимо заправиться');
    };

    /**
     * refuel - метод который вычисляет: колличество бензина в машине при заправке
     * @param valueAddFuel number
     */
    public refuel(valueAddFuel: number): void {
        this.fuel = this.fuel + valueAddFuel;
    };

    /**
     * resFuel - метод для получения значения protected свойства fuel
     */
    public get resFuel(): number {
        return this.fuel
    };

    /**
     * resMileage - метод для получения значения protected свойства mileage
     */
    public get resMileage(): number {
        return this.mileage;
    };
}


/*Второй вариант*/
class Matiz extends Car {

    protected opportunityDrive: number = 0
    protected static expenseFuel: number = 0.1;
    
    /**
     * drive - метод который вычисляет:
     * 1. Возможное колличество километров, которые автомобиль имеет возможность проехать с имеющимся у него колличеством бензина
     * 2. Если возможное колличество километров меньше желаемого колличества, то общий пробег составит - текущее значение плюс возможное,
     * а колличество бензина составит ноль.
     * 2. Если возможное колличество километров больше желаемого колличества, то общий пробег составит текущее значение плюс желаемое,
     * а колличество бензина составит текущее значение минус затраченное на проезд желаемого колличества килллометров
     * @param valueAddMileage number
     */
    public drive(valueAddMileage: number): void {
        this.opportunityDrive = this.fuel / Matiz.expenseFuel;
        if (this.opportunityDrive <= valueAddMileage) {
            this.mileage += this.opportunityDrive;
            this.fuel = 0;
            return console.log('Вам необходимо заправиться');
        }
        this.mileage = this.mileage + valueAddMileage;
        this.fuel = this.fuel - valueAddMileage * Matiz.expenseFuel;
    };

    /**
     * refuel - метод который вычисляет: колличество бензина в машине при заправке
     * @param valueAddFuel number
     */
    public refuel(valueAddFuel: number): void {
        this.fuel = this.fuel + valueAddFuel;
    };

    /**
     * resFuel - метод для получения значения protected свойства fuel
     */
    public get resFuel(): number {
        return this.fuel
    };

    /**
     * resMileage - метод для получения значения protected свойства mileage
     */
    public get resMileage(): number {
        return this.mileage;
    };
}
