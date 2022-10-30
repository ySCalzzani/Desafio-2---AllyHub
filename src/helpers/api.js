const BASE_URL = `https://amazon-api.sellead.com`

const responseToJson = (response) => response.json();

export const fetchCountries = () => {
    const url = `${BASE_URL}/country`;
    return fetch(url).then(responseToJson); //retorno implicito
};

export const fetchCities = () => {
    const url = `${BASE_URL}/city`;
    return fetch(url).then(responseToJson)
};