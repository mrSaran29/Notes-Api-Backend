const Task=require('../schema')


const getNote=async(req,res)=>{
try {
    const getData=await Task.find()
    res.status(200).json({message:getData})

} catch (error) {
    res.status(500).json({message:'internal server error'})
}

}
const postNote=async(req,res)=>{
    try {
        const data=req.body
        const postData=await Task.create(data)
        res.status(200).json({message:'notes add successfully'})
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }
}
const putNote=async(req,res)=>{
    try {
         const id=req.params.id
         const data=req.body
         const putData=await Task.findByIdAndUpdate(id,data,{new:true})
         res.status(200).json({message:'notes is updated'})
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }

}
const deleteNote=async(req,res)=>{
    try {
        const id=req.params.id
        const deleteData=await Task.findByIdAndDelete(id)
        res.status(200).json({message:'notes deleted'})
        
    } catch (error) {
        res.status(500).json({message:'internal server error'})
    }

}
module.exports={getNote,postNote,putNote,deleteNote}