var $ = require('jquery');
var Person = require('./modules/Person');

alert("This is a final test");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jany Smith", "green");
jane.greet();

$("h1").remove();