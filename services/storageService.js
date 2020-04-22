export const storageService = {
    store,
    load
}

function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function load(key, defaultValue = null) {
    var value = localStorage[key];
    return (value)? JSON.parse(value) : defaultValue
}

