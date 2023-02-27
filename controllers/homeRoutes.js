const router = require('express').Router();
const Projects = require("../models/Projects")


router.get('/',(req,res)=> {
    try {
        res.render('intro')
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/contact', (req,res)=> {
    res.render('contacts')
})

router.get('/projects',async (req,res)=> {
    try {
        const projects = await Projects.findAll()
        const project = projects.map((items)=>items.get({plain:true}))
        res.render('projects', {project})
    } catch (err) {
        res.status(500).json(err)
    }
   
})

module.exports = router