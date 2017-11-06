var express = require("express");
var Twit = require('twit');
var cors = require('cors');

const config = {
    consumer_key: 'XXX',
    consumer_secret: 'XXX',
    access_token: 'XXX',
    access_token_secret: 'XXX'
};

const T = new Twit(config);

var app = express();
app.use(cors());

app.get("/:q/:count", function(req, res) {
    T.get('search/tweets', req.params, function(err, data, response) {
        res.status(200)
            .end(JSON.stringify(data));
    });
});

app.listen(8081, function() {
    console.log("Server listening port 8081");
});
