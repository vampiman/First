/*
var http = require('http');
var server = require('express');

http.createServer((req,res) => {
    res.write("Hello mate");
    res.end();
}).listen(8080,console.log('Listening to port 8080'));
*/
/*
var rectangle = {
    area: (x,y)=> (x*y),

    perimeter: (x,y) => ((x+y)*2)

};
*/
var rectangle = require('./rectangle')


    rectangle(4,-1,(err,rect) => {
        if(err){
            console.log('ERROR: ' + err.message);
        }
        else{
            console.log(`Area is ${rect.area()} and perimeter is ${rect.perimeter()}`);
        }
    })
    


