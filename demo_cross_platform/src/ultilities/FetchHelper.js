class FetchHelper {
    constructor() {
        this.defaultHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    fetch(input, init = {}, beforeFetch, afterFetch) {
        let initWithDefaultHeaders = {
            ...init,
            headers: mergeWithDefaultHeaders(init.headers, this.defaultHeaders)
        }
        if (beforeFetch)
            beforeFetch();
        return new Promise((resolve, reject) => {
            fetch.apply(null, [input, initWithDefaultHeaders])
                .then(response => {
                    if (afterFetch)
                        afterFetch();
                    resolve(response.json())
                }).catch(error => {
                    if (afterFetch)
                        afterFetch();
                    reject(error)
                })
        })
    }
}

/*** PRIVATE METHODS: ***/

function mergeWithDefaultHeaders(headers = {}, defaultHeaders) {
    var headerObj = {}
    if (headers instanceof Headers) {
        for (let [key, value] of headers) {
            headerObj[key] = value
        }
    } else {
        headerObj = headers
    }
    return Object.assign({}, defaultHeaders, headers);
}

const fetchHelperInstance = new FetchHelper();

export default fetchHelperInstance