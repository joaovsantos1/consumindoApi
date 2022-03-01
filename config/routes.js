const express = require('express')
const api = require('./src/services/api')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({message: "esta funcionando!"})
})

routes.get("/users", async (req,res) => {
    try{
        const {data} = await api.get("/")

        return res.json(data)
    } catch (error){
        console.error(error)
    }
})

routes.get("/website", async (req,res) => {
    try{
        const {data} = await api.get("/")
        const userWeb = data.map(w => ({website: w.website}))
        userWeb.sort((a,b) => a.name.localeCompare(b.name))
        return res.json(websiteData(userWeb))
    } catch (error){
        console.error(error)
    }
})

routes.get("/usersuite", async (req,res) => {
    try{
        const {data} = await api.get("/")
        const suiteData = data.filter(u => u.adress.suite.includes("Suite"))
        suiteData.sort((a,b) => a.name.localeCompare(b.name))
        return res.json(suiteData(suiteData))
    } catch (error){
        console.error(error)
    }
})


module.exports = routes