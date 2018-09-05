// fucntion and called right now 
var firstname = 'Jane';

(function(){
var firstname = 'John';
console.log(firstname);
}());



console.log(firstname);