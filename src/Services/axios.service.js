import axios from 'axios';


// axios.interceptors.request.use(function (config) {
//     console.log(config);
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

export const axiosService = (options) => {
    return axios({
        method: options.method ? options.method : 'GET',
        url: options.url,
        headers: options.headers ? options.headers : {},
        data: options.body ? options.body : null,
        params: options.params ? options.params: null,
    })
}