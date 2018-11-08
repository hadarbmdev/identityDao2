
export const service = {
    getData,
};

function getData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    };

    return fetch('/oryarok/api/users/getCoordinators', requestOptions)
        .then(response => {
            if (!response.ok) {
                console.error("getCoordinators failed. error = "+response.statusText);
                return Promise.reject(response.statusText);
            }

            let jsonResponse = response.json();

            return jsonResponse;
        })
        .then(payload => {
            console.log("getCoordinators Response:"+payload);

            return payload;
        });
}
