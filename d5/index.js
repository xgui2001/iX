class Person{
    
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = -1;
    }

    getFullName(){
        return this.firstName + '' + this.lastName;
    }
}

const person = new Person('Angela', 'Gui', '011001');


class Customer extends Person{

    constructor(firstName, lastName, dob, phone, membership){
        super(firstName, lastName, dob);

        this.phone = phone;
        this.membership = membership;
    }

    static memberCost(){
        return '$1000';
    }
}

//static can be changed, const cant

const customer = new Customer('John', 'Doe', '0420', '1234567', 'Gold');

const people = [
    person,
    customer,
]

for (let i = 0; i<people.length; i++){
    const person = person[i];
    console.log(person.getFullName());

}

for (let person of people){
    console.log(person.getFullName());
}

//people.forEach(person, i){