import Twitter from 'twitter';

const client = new Twitter({
    consumer_key: '1ZDtDeQwWFKeCM6lnER6ZG5er',
    consumer_secret: '39qb5RcftaI2xZ8bfTvXDkwcDUXx6v5ziSkC5CqFod4EWzgwnQ',
    access_token_key: '2226529326-FijbkwDziPIfhYOdPSoUFi8mksuEm9cDkppkXzL',
    access_token_secret: 'tTR0KolimlueAKuOSB5nMsLdxgxgk5JhG5bxin4yYyxrD'
});

const params = {
    q: 'nodejs',
    count: 5
};

export const tryGetTweets = () => {
    client.get('search/tweets', params, (error, tweets, response) => {
        if (!error) {
            console.log(tweets);
        }
    });
};