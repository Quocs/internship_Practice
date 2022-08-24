class Person {
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,occupation){
        console.log('Creating student class');
        super(name);
        this.occupation=occupation;
    }
    greet(){
        super.greet();
        console.log('Occupation : '+this.occupation);
    }
}

let student1 = new Student('Jack','Student');
student1.greet()
