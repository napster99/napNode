var http = require('http');
var fs = require('fs');

try{

	var str = fs.readFile('nap.html','utf-8',function(err,data){
		http.createServer(function(req, res){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end(data);
		}).listen(8124);
	});

	


}catch(e){
	alert(e.message);
}


console.log('Server running at http://127.0.0.1:8124/');
