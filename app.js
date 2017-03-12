var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname ,"doc")));

/**
 * @api {get} /whoami
 * @apiDescription Returns header information of the user
 * @apiName whoami
 * @apiGroup HeaderParser
 * @apiExample {url} Request-Example:
 *  https://header-parser-logan.herokuapp.com/whoami
 * @apiSuccess {string} ipaddress The client's IP address
 * @apiSuccess {string} language The client's language
 * @apiSuccess {string} software The client's software
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "ipaddress":"24.252.88.14","language":"en-US","software":"X11; CrOS x86_64 9000.91.0"
 *  }
 */
app.use('/whoami', function(req, res) {
    var stats = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0].split(';')[0],
        software: req.headers['user-agent'].split(')')[0].split('(')[1]
    };
    
    return res.json(stats);
});
app.listen(process.env.PORT || 8080);