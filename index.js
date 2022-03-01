const express = require('express')
const cors = require('cors')
const api = require('./src/services/api')
const routes = require('./config/routes')

 const app = express()

 app.use(cors())
 app.use(routes)

 app.listen(8080, () => {
     console.log(`Express started at http://localhost:8080`)
 })