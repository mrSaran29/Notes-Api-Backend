const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const CrudRouter=require('./Router/router')

mongoose.connect('mongodb://localhost:27017/TitleAndNotes')
.then(()=>{
    console.log('DB connect successfully')
})
app.use(cors())
app.use(express.json())
 app.use('/home',CrudRouter)
app.listen(8080,()=>{
  console.log('server is running')
})