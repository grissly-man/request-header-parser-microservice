var express = require('express');
var app = express();
app.use('/', function(req, res) {
    var stats = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0].split(';')[0],
        software: req.headers['user-agent'].split(')')[0].split('(')[1]
    };
    
    return res.json(stats);
});
app.listen(process.env.PORT || 8080);