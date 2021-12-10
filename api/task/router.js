// build your `/api/tasks` router here
const express = require('express');
const task = require('./model');

const router = express.Router();

router.get('/', (req,res,next)=>{
    task.getTask()
    .then(t =>{
        res.status(201).json(t)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    task.createTask(req.body)
    .then(newT =>{
        res.status(201).json(newT)
    })
    .catch(next)
})
module.exports = router;