function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const myCar = new Car('Quoc', 'Thanh');

console.log(myCar.brand);

//invalid name

const carlist = {
    color: 'blue',
    "The name": "Quoc"
}

//nested object


const car = {
    brandlist: {
        name: 'Flod',
        age: '29'
    },
    color: 'green'
};

console.log(car.brandlist.name)

// delete attribute

delete car.brandlist.age

console.log(car.brandlist);


//method object

const person = {
    'Last_Name':'Thanh Quoc',
    'First_Name':'Nguyen',
    age:22,
    fullname : function (){
        console.log(`full name is ${this.First_Name} ${this.Last_Name}`)
    }
}

person.fullname();
