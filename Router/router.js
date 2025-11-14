const express=require('express')
const { getNote, postNote, putNote, deleteNote } = require('../Controller/controller')
const router=express.Router()



router.get('/Note',getNote)

router.post('/AddNote',postNote)

router.put('/UpdateNote/:id',putNote)

router.delete('/DeleteNote/:id',deleteNote)


module.exports=router