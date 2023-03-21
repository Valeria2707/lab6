// содежимое index.js
const http = require('http')

http.createServer(function(request,response){

	response.setHeader("Content-Type","text/html; charset=utf-8;");

	if(request.url === "/" || request.url === "/"){
		response.write('<h2> Home Page</h2>');
	}

	else if(request.url === "/is-13"){
		response.write('<h2> Valeria Zavadetska 2 cours</h2>');
	}
	else{
		response.write('<h2>Not found</h2>');
	}
	response.end();
}).listen(3000);