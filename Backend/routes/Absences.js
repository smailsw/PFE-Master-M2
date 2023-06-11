const express = require('express')
const absences = express.Router()
const router= require('express').Router();
const cors = require('cors')


const Absence = require('../Models/Absence')
absences.use(cors())

process.env.SECRET_KEY = 'secret'

absences.get('/', (req, res) => {
    Absence.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

absences.get('/test/:id_Etudiant', (req, res) => {
    Absence.findAndCountAll(
   { where: {id_Etudiant: req.params.id_Etudiant}
    }
    
  )
.then(result=>res.json( {'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

absences.get('/:id_Absence', (req, res) => {
  Absence.findOne(
 { where: {id_Absence: req.params.id_Absence}
  }
  
)
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

absences.delete('/delete/:id_Absence', (req, res) => {
    Absence.destroy({
    where: {id_Absence: req.params.id_Absence},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


absences.post('/AddAbsence', (req, res) => {
  const today = new Date()
  const absenceData = {
    id_Etudiant: req.body.id_Etudiant,
    id_Module: req.body.id_Module,
  
    id_Seance: req.body.id_Seance,
    id_Filiere: req.body.id_Filiere,

    created: today,
    
  }    
        Absence.create(absenceData)
            .then(absence => {
              res.json({ status: absence.id_Absence + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
          })
    



module.exports = absences
