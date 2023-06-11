const express = require('express')
const etudiants = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Etudiant = require('../Models/Etudiant')

etudiants.use(cors())

process.env.SECRET_KEY = 'secret'


etudiants.get('/', (req, res) => {
    Etudiant.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

etudiants.get('/:id_Etudiant', (req, res) => {
    Etudiant.findOne(
   { where: {id_Etudiant: req.params.id_Etudiant}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




etudiants.delete('/delete/:id_Etudiant', (req, res) => {
    Etudiant.destroy({
    where: {id_Etudiant: req.params.id_Etudiant},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


etudiants.put('/:id_Etudiant', (req, res) => {
  const today = new Date()
  const etudiantDataUp = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    sexe: req.body.sexe,
    cin: req.body.cin,
    cne: req.body.cne,
    date_naissance: req.body.date_naissance,
    telephone: req.body.telephone,
    id_Filiere: req.body.id_Filiere,
    urlImage: req.body.urlImage,
    created: today,
    
  }
  Etudiant.update(
    etudiantDataUp,
    {where:{id_Etudiant: req.params.id_Etudiant}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

etudiants.post('/AddEtudiant', (req, res) => {
  const today = new Date()
  console.log(req.body.telephone)
  const etudiantData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    sexe: req.body.sexe,
    cin: req.body.cin,
    cne: req.body.cne,
    date_naissance: req.body.date_naissance,
    telephone: req.body.telephone,
    id_Filiere: req.body.id_Filiere,
    created: today,  
   
  }

  Etudiant.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(etudiant => {
      if (!etudiant) {
       
        Etudiant.create(etudiantData)
            .then(etudiant => {
              res.json({ status: etudiant.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
      
      } else {
        res.json({ error: 'Etudiant already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = etudiants

