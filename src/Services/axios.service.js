import axios from 'axios';

export const axiosService = (options) => {
    console.log(options)
    return axios({
        method: options.method ? options.method : 'GET',
        url: options.url,
        headers: options.headers ? options.headers : {},
        data: options.body ? options.body : null,
        params: options.params ? options.params: null,
    })
}