var person = {
    firstname: 'John',
    lastename : 'Doe',
    greet: function(){
        console.log(' Hello Mr , '+ this.firstname + ' ' + this.lastename);
    }
};
person.greet();

console.log(person['firstname']);
