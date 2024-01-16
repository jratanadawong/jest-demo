const delay = ms => new Promise(resolve =>setTimeout(resolve, ms));

const fetchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise fetched!');
    }, 300);
});

const fetchData = async () => {
    return await delay(300).then(() => 'data fetched!');
};

const fetchCountries = async () => {
    const countries = [
        'Canada',
        'US',
        'Japan',
        'Italy',
        'Spain',
        'Nigeria'
    ];
    return await delay(300).then(() => countries);
};

const fetchCapitals = async () => {
    const capitals = [
        'Ottawa',
        'Washington',
        'Tokyo',
        'Rome',
        'Madrid',
        'Abuja'
    ]
    return await delay(300).then(() => capitals);
}

const callback = async (cb) => {
    await delay(300).then((err) => cb(err, "success"));
};

export {
    callback,
    fetchCapitals,
    fetchCountries,
    fetchData,
    fetchPromise
};