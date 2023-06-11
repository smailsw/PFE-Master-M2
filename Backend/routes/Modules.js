const express = require('express')
const modules = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Module = require('../Models/Module')
modules.use(cors())

process.env.SECRET_KEY = 'secret'

modules.get('/', (req, res) => {
    Module.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

//get Module by Id_prof
modules.get('/test/:id_Prof', (req, res) => {
  Module.findAndCountAll(
 { where: {id_Prof: req.params.id_Prof}
  }
  
)
.then(result=>res.json({ 'data' : result['rows'],'count' : result['count']} ))
.catch(err => res.status(400).json('Error: '+err));
})


modules.get('/:id_Module', (req, res) => {
    Module.findOne(
   { where: {id_Module: req.params.id_Module}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

modules.delete('/delete/:id_Module', (req, res) => {
    Module.destroy({
    where: {id_Module: req.params.id_Module},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


modules.put('/:id_Module', (req, res) => {
  const today = new Date()
  const moduleDataUp = {
    name: req.body.name,
    nbrHeur: req.body.nbrHeur,
    id_Prof: req.body.id_Prof,
    id_Filiere: req.body.id_Filiere,
    created: today
  }
  Module.update(
    moduleDataUp,
    {where:{id_Module: req.params.id_Module}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




modules.post('/AddModule', (req, res) => {
  const today = new Date()
  const moduleData = {
    name: req.body.name,
    nbrHeur: req.body.nbrHeur,
    id_Filiere: req.body.id_Filiere,
    
    created: today,
    id_Prof: req.body.id_Prof,
  }

  Module.findOne({
    where: {
      name: req.body.name
    }
  })
    //TODO bcrypt
    .then(module => {
      if (!module) {
        Module.create(moduleData)
            .then(module => {
              res.json({ status: module.name + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'module already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = modules
