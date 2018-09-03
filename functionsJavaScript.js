// function statement 
function greet(){
    console.log('hi ');
}

greet();

// functions are first-class

function logGreeting(fn){
    fn();
}

logGreeting(greet);

// function expression 

var greetMe = function () {
    console.log('Hi Lucho');
}

greetMe();

// it's first-class
logGreeting(greetMe);


// usea a fucntion expression on the fly 

logGreeting(function(){
    console.log('Hi Lucho on the fly !! ');
});