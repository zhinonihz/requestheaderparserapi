var http = require('http');

http.createServer(function(req, res){
	var ipAddress = req.connection.remoteAddress,
	language = req.headers["accept-language"].split(';'),
	os = req.headers["user-agent"];
	res.end(JSON.stringify({"ipaddress": ipAddress, "language": language[0], "software": os.slice(os.indexOf('(') + 1, os.indexOf(')'))}))
}).listen(process.env.PORT || 3000)