const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:String,
    notes:String
},
{
    timestamps: true 
}
)



const Task=mongoose.model('title',taskSchema)

module.exports=Task