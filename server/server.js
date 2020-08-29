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


app.get("/build/static/:folder/:filename",(req,resp)=>{
       const filePath = path.join(path.dirname(__dirname),req.path)

       if (fs.existsSync(filePath)){
           resp.sendFile(filePath)
       } else {
           resp.sendStatus(403)
       }
})

app.get("*",(req,resp)=>{
       const filePath = path.join(path.dirname(__dirname),'client','html','index.html')
       resp.sendFile(filePath)
})

app.listen(8000)