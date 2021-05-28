import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export const getUserList = () => {
    return axios.get(`${url}/users`)
        .then(response => response.data)
        .catch(error => console.log('getUserList api', error));
};
