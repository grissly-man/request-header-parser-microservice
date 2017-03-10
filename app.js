var express = require('express');
var path = require('path');
var app = express();
app.use('/', express.static(path.join(__dirname ,"out", "request-header-parser-microservice", "1.0.0")));
app.use('/whoami', function(req, res) {
    var stats = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0].split(';')[0],
        software: req.headers['user-agent'].split(')')[0].split('(')[1]
    };
    
    return res.json(stats);
});
app.listen(process.env.PORT || 8080);