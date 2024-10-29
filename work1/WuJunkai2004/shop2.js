// ====== ERROR ======
class InsufficientMoneyError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InsufficientMoneyError';
    }
}

class AnimalNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AnimalNotFoundError';
    }
}

// ====== ANIMAL ======
class Animal {
    constructor(name) {
        this.name = name;
        this.age  = 0;
        this.gender = 0;
        this.sell_price = 0;
        this.buy_price = 0;
    }
    toString() {
        return `${this.name}: age=${this.age}, gender=${this.gender}`
    }
}


class Dog extends Animal {
    constructor(age, gender) {
        super('Dog');
        this.age = age;
        this.gender = gender;
        this.sell_price = 100;
        this.buy_price = 200;
        this.isVaccineInjected = false;
    }
    injectVaccine() {
        this.isVaccineInjected = true;
    }
    vaccineStatus() {
        return this.isVaccineInjected;
    }
}


class Cat extends Animal {
    constructor(age, gender){
        super('Cat');
        this.age = age;
        this.gender = gender;
        this.sell_price = 50;
        this.buy_price = 100;
    }
}


class Fish extends Animal {
    constructor(age, gender){
        super('Fish');
        this.age = age;
        this.gender = gender;
        this.sell_price = 10;
        this.buy_price = 20;
    }
}


class Customer {
    constructor(name) {
        this.name = name;
        this.wanted_pet = 'none'
    }
    toString() {
        return `${this.name}: money=${this.money}, pets=${this.pets}`
    }
    buy(pet) {
        this.wanted_pet = pet;
        return this;
    }
}


// ====== SHOP =====
class AnimalShop{
    constructor(capital) {
        this.animals = [];
        this.profit  = 0;
        this.history_customers = [];
        this.todays_customers  = [];
        this.capital_money = capital;
    }
    purchase(animal) {
        if (this.capital_money < animal.buy_price) {
            throw new InsufficientMoneyError('Not enough money to buy');
        }
        this.capital_money -= animal.buy_price;
        this.animals.push(animal);
    }
    sell(animal_name) {
        let animal_idx = this.animals.findIndex(
            (a) => a.name === animal_name
        )
        if (animal_idx === -1) {
            throw new AnimalNotFoundError('Animal not found');
        }
        // del idx
        let sold_animal = this.animals[animal_idx];
        this.animals.splice(animal_idx, 1);
        return sold_animal;
    }
    tend(customer) {
        if(customer.wanted_pet === 'none') {
            return;
        }
        let sold = this.sell(customer.wanted_pet);
        this.profit += sold.sell_price;
        this.capital_money += sold.sell_price;
        this.todays_customers.push(customer);
    }
    stop() {
        this.history_customers.push(this.todays_customers);
        this.todays_customers = [];
    }
}


async function input(prompt){
    process.stdout.write(prompt);
    return new Promise((resolve) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}


async function main(){
    let my_shop = new AnimalShop(1000);
    while(true){
        let cmd = await input('Enter command: ');
        switch(cmd){
            case 'exit':
                return;
            case 'buy':
                let pet = await input('Enter pet name: ');
                let age = await input('Enter pet age: ');
                break;
            case 'help':
                console.log('Commands: buy, sell, tend, stop, exit');
                break;
            case 'sell':
                let who = await input('Enter customer name: ');
                let pet = await input('Enter animal name: ');

    }
} 


main()
