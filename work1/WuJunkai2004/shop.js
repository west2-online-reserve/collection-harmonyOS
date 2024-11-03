let price_list = {
    "Dog": 100,
    "Cat": 200,
    "Fish": 80
};
class Dog {
    constructor(age, gender) {
        this.name = "Dog";
        this.age = age;
        this.gender = gender;
        this.price = price_list["Dog"];
        this.isVaccineInjected = false;
    }
    toString() {
        return `Dog: name=${this.name}, age=${this.age}`;
    }
    injectVaccine() {
        this.isVaccineInjected = true;
    }
    vaccineStatus() {
        return this.isVaccineInjected;
    }
}
class Cat {
    constructor(age, gender) {
        this.name = "Cat";
        this.age = age;
        this.gender = gender;
        this.price = price_list["Cat"];
    }
    toString() {
        return `Cat: name=${this.name}, age=${this.age}`;
    }
}
class Fish {
    constructor(age, gender) {
        this.name = 'Fish';
        this.age = age;
        this.gender = gender;
        this.price = price_list["Fish"];
    }
    toString() {
        return `Fish: name=${this.name}, age=${this.age}`;
    }
}
class Customer {
    constructor(name) {
        this.name = name;
        this.shopping_amount = 0;
        this.shopping_count = 0;
        this.last_shopping_time = new Date();
    }
    buy(animal) {
        this.shopping_amount += animal.price;
        this.shopping_count += 1;
        this.last_shopping_time = new Date();
    }
}
// define some error
class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}
class AnimalNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "AnimalNotFoundError";
    }
}
class AnimalShop {
    constructor(capital) {
        this.capital = capital;
        this.animals = [];
        this.history_customers = [];
        this.todays_customers = [];
        this.profit = 0;
    }
    purchase(animal) {
        if (this.capital < animal.price) {
            throw new InsufficientBalanceError("capital is not enough");
        }
        this.capital -= animal.price;
        this.animals.push(animal);
    }
    sell(name, customer) {
        let animal_id = this.animals.findIndex((animal) => { return animal.name === name; });
        if (animal_id === -1) {
            throw new AnimalNotFoundError("animal not found");
        }
        let animal = this.animals[animal_id];
        customer.buy(animal);
        this.capital += animal.price;
        this.todays_customers.push(customer);
        this.animals.splice(animal_id, 1);
        console.log("sell success");
        console.log("Info: " + animal.toString());
        return customer;
    }
    stop() {
        this.history_customers.push(...this.todays_customers);
        this.todays_customers = [];
    }
}
function main() {
    let shop = new AnimalShop(1000);
    let cus1 = new Customer("Tom");
    let cus2 = new Customer("Jerry");
    shop.purchase(new Dog(1, 'f'));
    shop.purchase(new Cat(2, 'm'));
    shop.purchase(new Fish(3, 'f'));
    shop.purchase(new Dog(3, 'f'));
    cus1 = shop.sell("Dog", cus1);
    cus2 = shop.sell("Cat", cus2);
    cus1 = shop.sell("Dog", cus1);
}
main();
