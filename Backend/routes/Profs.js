const express = require('express')
const profs = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Prof = require('../Models/Prof')
profs.use(cors())

process.env.SECRET_KEY = 'secret'

profs.get('/', (req, res) => {
    Prof.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

profs.get('/:id_Prof', (req, res) => {
    Prof.findOne(
   { where: {id_Prof: req.params.id_Prof}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

profs.delete('/delete/:id_Prof', (req, res) => {
    Prof.destroy({
    where: {id_Prof: req.params.id_Prof},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


profs.put('/:id_Prof', (req, res) => {
  const today = new Date()
  const profDataUp = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    sexe: req.body.sexe,
    cin: req.body.cin,
    telephone: req.body.telephone,
    created: today
  }
  Prof.update(
    profDataUp,
    {where:{id_Prof: req.params.id_Prof}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




profs.post('/AddProf', (req, res) => {
  const today = new Date()
  const profData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    sexe: req.body.sexe,
    cin: req.body.cin,
    telephone: req.body.telephone,
    created: today
  }
  console.log("------------------------------------->",profData)
  Prof.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(prof => {
      if (!prof) {
       
          Prof.create(profData)
            .then(prof => {
              res.json({ status: prof.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
      
      } else {
        res.json({ error: 'Prof already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = profs

