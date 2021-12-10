// build your `/api/resources` router here
const express = require('express');
const resources = require('./model');

const router = express.Router();

router.get('/', (req,res,next)=>{
    resources.getResources()
    .then(r =>{
        res.status(201).json(r)
    })
    .catch(next)
})

router.post('/', (req,res,next)=>{
    resources.createResource(req.body)
    .then(newR => {
        res.status(201).json(newR)
    })
    .catch(next)
})

module.exports = router;