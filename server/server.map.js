import path from 'path'
import fs from 'fs'
import {user} from './user.data'
import schema from './scheme/scheme'
import bodyparser from 'body-parser'

const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const app = express()

app.use(bodyparser.json())

app.use('/',(req,resp,next)=>{

    try {
        const json = JSON.parse(req.cookies.auth)
        user.isUserAdmin(json)
    } catch (error) {

    } finally {
        next();
    }
})

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}))

app.post('/login',(req,resp)=>{

    if(typeof req.body == 'object' && req.body!==null){
        const obj = {email:req.body.email,password:req.body.password};

        const isUser = user.isUserAdmin({email:req.body.email,password:req.body.password})

        if(isUser){
           resp.cookie('auth',JSON.stringify(obj))
           resp.end(JSON.stringify({"status":"admin"}))
        } else {
           resp.end(JSON.stringify({"status":"guest"}))
        }

    } else {
        return resp.send("Not allowed")
    }
})


app.get("/:folder/:filename",(req,resp)=>{
    const filePath = path.resolve("build",req.path.slice(1))

       if (fs.existsSync(filePath) && req.params.folder!=="server"){
           resp.sendFile(filePath)
       } else {
           resp.sendStatus(403)
       }
})

app.get("*",(req,resp)=>{
       const filePath = path.resolve('build','index.html')
       resp.sendFile(filePath)
})

app.listen(8000)