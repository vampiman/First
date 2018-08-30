var http = require('http');
var server = require('express');

http.createServer((req,res) => {
    res.write("Hello mate");
    res.end();
}).listen(8080,console.log('Listening to port 8080'));