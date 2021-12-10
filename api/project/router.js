// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');

const router = express.Router();

router.get('/', (req,res,next)=>{
    projects.getProjects()
    .then(p =>{
        res.status(201).json(p)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    projects.createProjects(req.body)
    .then(newP => {
        res.status(201).json(newP)
    })
    .catch(next)
})

module.exports = router;