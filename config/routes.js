const express = require('express')
const api = require('./src/services/api')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({message: "esta funcionando!"})
})

function listData(data){
    const users = data
    const finalData = users.map(user => ({
        name: user.name,
        email: user.email,
        companyName: user.companyName
    }))

    finalData.sort((a,b) => a.name.localeCompare(b.name))

    return finalData
}

function websiteData(data){
    const usuario = data
    const userWeb = usuario.map(webs => ({website: webs.website}))

    userWeb.sort((a,b) => a.name.localeCompare(b.name))

    return userWeb
}

function suiteData(data) {
    const userSuite = data
    const suite = userSuite.filter(u => u.adress.suite.includes("Suite"))

    suite.sort((a,b) => a.name.localeCompare(b.name))

    return suite
}

routes.get("/userdata", async (req,res) => {
    try{
        const {data} = await api.get("/")

        return res.json(listData(data))
    } catch (error){
        console.error(error)
    }
})

routes.get("/website", async (req,res) => {
    try{
        const {data} = await api.get("/")

        return res.json(websiteData(data))
    } catch (error){
        console.error(error)
    }
})

routes.get("/usersuite", async (req,res) => {
    try{
        const {data} = await api.get("/")

        return res.json(suiteData(data))
    } catch (error){
        console.error(error)
    }
})


module.exports = routes