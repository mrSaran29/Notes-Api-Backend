const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    title:String,
    notes:String
},
{
    timestamps: true 
}
)



const Task=mongoose.model('notes',taskSchema)

module.exports=Task