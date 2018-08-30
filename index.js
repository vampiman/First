/*
var http = require('http');
var server = require('express');

http.createServer((req,res) => {
    res.write("Hello mate");
    res.end();
}).listen(8080,console.log('Listening to port 8080'));
*/

var rectangle = {
    area: (x,y)=> (x*y),

    perimeter: (x,y) => ((x+y)*2)

};

function solveRect(l,L)
{
    console.log(`Area is ${rectangle.area(l,L)} and perimeter is ${rectangle.perimeter(l,L)}`);
}

solveRect(2,2);