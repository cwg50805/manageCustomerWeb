// in src/authProvider.js
const axios = require('axios')
export default {
    // called when the user attempts to log in
    login: async({ username, password }) => {
        await axios
        .post(`http://34.125.220.77:4000/api/login`, { email: username, password:password })
        .then((res) => {
            if (res.data["jwtToken"] !== ""){
                localStorage.setItem('jwtToken', res.data["jwtToken"]);
            }
        })
        .catch(error => {
            console.log(error)
            return null
        })

        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('jwtToken');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('jwtToken');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async() => {
        return localStorage.getItem('jwtToken')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};