import express from 'express'

const app = express()


import conn from './models'


conn.authenticate().then(()=>{
    console.log('success fully connected');
    
}).catch((error)=>{
    console.log(error)
})
const port  = 3000

import router from './routes/index'
import { error } from 'console';
app.get("/",(req,res)=>{

})

app.use(express.json())


app.use('/api',router)

app.listen(3000,()=>{
    console.log("Server running on port 30000")
})