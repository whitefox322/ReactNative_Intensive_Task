import {Twit} from 'twit';

const config = {
    consumer_key: '1ZDtDeQwWFKeCM6lnER6ZG5er',
    consumer_secret: '39qb5RcftaI2xZ8bfTvXDkwcDUXx6v5ziSkC5CqFod4EWzgwnQ',
    access_token: '2226529326-FijbkwDziPIfhYOdPSoUFi8mksuEm9cDkppkXzL',
    access_token_secret: 'tTR0KolimlueAKuOSB5nMsLdxgxgk5JhG5bxin4yYyxrD'
};

const T = new Twit(config);

const params = {
    q: 'akshay',
    count: 10
};

export const tryGetTweets = () => {
    T.get('search/tweets', params, (err, data, response) => {
        console.log(data);
    });
};