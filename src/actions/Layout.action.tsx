export const tryGetTweets = (params, size) => () => {
    const URL = `http://127.0.0.1:8081/${params}/${size}`;

    // return fetch(URL, {
    //     method: "get",
    //     mode: 'cors',
    //     headers: new Headers({'Access-Control-Allow-Origin':'*'}),
    //     body: ''
    // })
    //     .then((response) => response.json())
    //     .then((responseJSON) => {
    //         console.log(responseJSON);
    //     }).catch((err) => {
    //         console.error("Помилка: ", err);
    //     });
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
};

