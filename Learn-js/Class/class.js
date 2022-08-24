class Person{
    constructor(name){
        this.name=name;
    }
    hello(){
        console.log( 'Hello, I am '+this.name+'.')
    }
}

const flavio = new Person('flavio')
flavio.hello() //'Hello, I am flavio.'