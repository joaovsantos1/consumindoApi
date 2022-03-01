const axios = require('axios')

const api = axios.Create({baseURL: "https://jsonplaceholder.typicode.com/users"})

module.exports = api