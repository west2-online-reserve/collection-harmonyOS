interface Animal{
    name:string;
    age:number;
    gender:string;
    price:number;
    toString():string;
    }

//中华田园犬类
class ChineseRuralDog implements Animal{
    name:string ;
    age:number;
    gender:string;
    price:number=100;
    isVaccineInjected:boolean;
    constructor (isVaccineInjected:boolean,name:string,age:number,gender:string){
        this.isVaccineInjected=isVaccineInjected;
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    toString():string{
        return `中华田园犬的名字：${this.name},年龄：${this.age},性别:${this.gender},是否注射疫苗：${this.isVaccineInjected},价格：${this.price}`;
    }
    
}

//猫猫类
class Cat implements Animal{
    name:string;
    age :number;
    gender :string;
    price:number = 200;
    constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;        
        this.gender=gender;
    }
        toString():string{
        return `猫猫，名字：${this.name},年龄：${this.age},性别：${this.gender}`;
    }
}

//顾客类
class Customer{
    name:string;
    visitCount:number;
    lastestVisitTime:Date;
    constructor(name:string,visitCount:number,lastestVisitTime:Date){
        this.name=name;
        this.visitCount=visitCount;
        this.lastestVisitTime=lastestVisitTime;
    }
    toString():string{
    return `客户的名字是${this.name},到店的次数是${this.visitCount},最新到店的时间是${this.lastestVisitTime}`;
    }

}


class InsufficientBalanceError extends Error{
    constructor(message:string){
        super(message);
    }
}

class AnimalNotFoundError extends Error{
    constructor(message:string){
        super(message);
    }
}

interface AnimalShop{
    buyNewAnimal(animal:Animal):void;
    serveCustomer(customer:Customer):void;
    closeShop():void;
}

class myAnimalShop implements AnimalShop{
    private balance:number;
    private animals:Animal[];
    private customers:Customer[];
    private isOpened:boolean;
    constructor(balance:number,animals:Animal[],customers:Customer[],isOpened:boolean){
        this.balance=balance;
        this.animals=[];
        this.customers=[];
        this.isOpened=true;
    }

    buyNewAnimal (animal:Animal):void{
        if(this.balance<animal.price){
            throw new InsufficientBalanceError("余额不足，无法购买该动物");
        }
        this.animals.push(animal);
        this.balance-=animal.price;
        }
    serveCustomer(customer: Customer){
            if (this.animals.length == 0) {
                throw new AnimalNotFoundError("店内没有东西可买。");
        }
    const animalToSell = this.animals[0];
    console.log(`出售的动物：${animalToSell.toString()}`);
    this.customers.push(customer);
    this.balance+=animalToSell.price;
    this.animals.splice(0,1);//1表示删除anmals数组的第一个元素
    }
    closeShop():void{
        console.log("当天光顾的客户列表：");
        this.customers.forEach(customer=>console.log(customer.toString()));
        console.log(`一天的利润：${this.balance}`);
        this.isOpened=false;
    };
}

class Test{
        static test(){
        const shop = new myAnimalShop(500,[],[],true);
        const dog = new ChineseRuralDog(true,'小黑',2,'公');
        const cat = new Cat('小花',1,'母');
        shop.buyNewAnimal(dog);
        shop.buyNewAnimal(cat);
        const customer1 = new Customer('小明',1,new Date());
        const customer2 = new Customer('小红',2,new Date());
        shop.serveCustomer(customer2);
        shop.closeShop();
    }
}

Test.test();