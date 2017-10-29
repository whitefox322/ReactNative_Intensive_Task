import {LOAD__HOME__TWEETS} from 'constants/HomePage.constants';

export const tryGetTweets = (params, size) => dispatch => {
    const URL = `http://127.0.0.1:8081/${params}/${size}`;
    const xhr = new XMLHttpRequest();
    xhr.open("get", URL);
    xhr.responseType = "json";
    xhr.send();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState !== this.DONE) {
            return;
        }
        dispatch(LoadHomeTweets(this.response.statuses));
    });
};

const LoadHomeTweets: any = (payload: Array<any>) => {
    return {
        type: LOAD__HOME__TWEETS,
        payload: payload
    }
};


