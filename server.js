var express = require("express");
var Twit = require('twit');
var cors = require('cors');

const config = {
    consumer_key: '1ZDtDeQwWFKeCM6lnER6ZG5er',
    consumer_secret: '39qb5RcftaI2xZ8bfTvXDkwcDUXx6v5ziSkC5CqFod4EWzgwnQ',
    access_token: '2226529326-FijbkwDziPIfhYOdPSoUFi8mksuEm9cDkppkXzL',
    access_token_secret: 'tTR0KolimlueAKuOSB5nMsLdxgxgk5JhG5bxin4yYyxrD'
};

const T = new Twit(config);

var app = express();
app.use(cors());

app.get("/:q/:count", function(req, res) {
    // const params = {
    //     q: 'akshay',
    //     count: 10
    // };
    //

    console.log(req);
    T.get('search/tweets', req.params, function(err, data, response) {
        res.status(200)
            .end(JSON.stringify(data));
    });
});

app.listen(8081, function() {
    console.log("Server listening 8081");
});