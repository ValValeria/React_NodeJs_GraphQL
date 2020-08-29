import path from 'path'
import fs from 'fs'
const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const app = express()
const schema = require('./scheme/scheme')

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}))


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