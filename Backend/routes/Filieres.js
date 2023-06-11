const express = require('express')
const filieres = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Filiere = require('../Models/Filiere')
filieres.use(cors())

process.env.SECRET_KEY = 'secret'

filieres.get('/', (req, res) => {
    Filiere.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

filieres.get('/:id_Filiere', (req, res) => {
    Filiere.findOne(
   { where: {id_Filiere: req.params.id_Filiere}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

filieres.delete('/delete/:id_Filiere', (req, res) => {
    Filiere.destroy({
    where: {id_Filiere: req.params.id_Filiere},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


filieres.put('/:id_Filiere', (req, res) => {
  const today = new Date()
  const filiereDataUp = {
    name: req.body.name,
    abreviation: req.body.abreviation,
    created: today
  }
  Filiere.update(
    filiereDataUp,
    {where:{id_Filiere: req.params.id_Filiere}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




filieres.post('/AddFiliere', (req, res) => {
  const today = new Date()
  const filiereData = {
    name: req.body.name,
    abreviation: req.body.abreviation,

    created: today
  }

  Filiere.findOne({
    where: {
      name: req.body.name
    }
  })
    //TODO bcrypt
    .then(filiere => {
      if (!filiere) {
          Filiere.create(filiereData)
            .then(filiere => {
              res.json({ status: filiere.name + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'filiere already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = filieres
