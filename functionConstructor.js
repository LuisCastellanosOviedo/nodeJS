function Person(firstname, lastname) {

    this.firstname = firstname
    this.lastname = lastname

}

Person.prototype.greet = function(){
    console.log('Hello ' + this.firstname + this.lastname);
}

var John = new Person('John', 'Doe');

var jane = new Person('Jane','Doe');

console.log(John.firstname);
John.greet();

console.log(John.__proto__);
console.log(jane.__proto__);
console.log(John.__proto__ === jane.__proto__);
