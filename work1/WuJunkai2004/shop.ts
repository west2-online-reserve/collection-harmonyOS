// a interface class named Animal
interface Animal {
    name: string;
    age : number;
    gender: string;
    price : number;
    toString(): string;
}

let price_list = {
    "Dog": 100,
    "Cat": 200,
    "Fish": 80
}

class Dog implements Animal {
    name: string;
    age: number;
    gender: string;
    price: number;
    isVaccineInjected: boolean;
    constructor(age: number, gender: string) {
        this.name = "Dog";
        this.age = age;
        this.gender = gender;
        this.price = price_list["Dog"];
        this.isVaccineInjected = false;
    }

    toString(): string {
        return `Dog: name=${this.name}, age=${this.age}`
    }

    injectVaccine() {
        this.isVaccineInjected = true;
    }

    vaccineStatus() {
        return this.isVaccineInjected;
    }
}

class Cat implements Animal {
    name: string;
    age: number;
    gender: string;
    price: number;
    constructor(age: number, gender: string) {
        this.name = "Cat";
        this.age = age;
        this.gender = gender;
        this.price = price_list["Cat"];
    }
    toString(): string {
        return `Cat: name=${this.name}, age=${this.age}`
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    gender: string;
    price: number;
    constructor(age: number, gender: string) {
        this.name = 'Fish'
        this.age = age;
        this.gender = gender;
        this.price = price_list["Fish"];
    }
    toString(): string {
        return `Fish: name=${this.name}, age=${this.age}`
    }
}

class Customer {
    name: string;
    shopping_amount: number;
    shopping_count: number;
    last_shopping_time: Date;
    constructor(name: string) {
        this.name = name;
        this.shopping_amount = 0;
        this.shopping_count = 0;
        this.last_shopping_time = new Date();
    }
    buy(animal: Animal) {
        this.shopping_amount += animal.price;
        this.shopping_count  += 1;
        this.last_shopping_time = new Date();
    }
}

// define some error
class InsufficientBalanceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

class AnimalNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AnimalNotFoundError";
    }
}

class AnimalShop {
    capital: number;
    profit: number;
    animals: Animal[];
    history_customers: Customer[];
    todays_customers: Customer[];
    constructor(capital: number){
        this.capital = capital;
        this.animals = [];
        this.history_customers = [];
        this.todays_customers = [];
        this.profit = 0;
    }
    purchase(animal: Animal): void {
        if (this.capital < animal.price) {
            throw new InsufficientBalanceError("capital is not enough");
        }
        this.capital -= animal.price;
        this.animals.push(animal);
    }
    sell(name: string, customer: Customer): Customer {
        let animal_id: number = this.animals.findIndex(
            (animal) => { return animal.name === name; }
        )
        if(animal_id === -1) {
            throw new AnimalNotFoundError("animal not found");
        }
        let animal: Animal = this.animals[animal_id];
        customer.buy(animal);
        this.capital += animal.price;
        this.todays_customers.push(customer);
        this.animals.splice(animal_id, 1);
        console.log("sell success");
        console.log("Info: " + animal.toString());
        return customer;
    }
    stop(): void {
        this.history_customers.push(...this.todays_customers);
        this.todays_customers = [];
    }
}


function main(): void{
    let shop = new AnimalShop(1000);
    let cus1 = new Customer("Tom");
    let cus2 = new Customer("Jerry");
    shop.purchase(new Dog(1, 'f'))
    shop.purchase(new Cat(2, 'm'))
    shop.purchase(new Fish(3, 'f'))
    shop.purchase(new Dog(3, 'f'))

    cus1 = shop.sell("Dog", cus1);
    cus2 = shop.sell("Cat", cus2);
    cus1 = shop.sell("Dog", cus1);
}

main()