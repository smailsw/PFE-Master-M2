const express = require('express')
const annonces = express.Router()
const cors = require('cors')

const Annonce = require('../Models/Annonce')
annonces.use(cors())

process.env.SECRET_KEY = 'secret'

annonces.get('/', (req, res) => {
    Annonce.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})




annonces.get('/:id_Annonce', (req, res) => {
    Annonce.findOne(
   { where: {id_Annonce: req.params.id_Annonce}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})


//get annonce by id_filiere
annonces.get('/ByIdFiliere/:id_Filiere', (req, res) => {
    Annonce.findAndCountAll(
   { where: {id_Filiere: req.params.id_Filiere}
    }
    
  )
.then(result=>res.json(  {'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

annonces.delete('/delete/:id_Annonce', (req, res) => {
    Annonce.destroy({
    where: {id_Annonce: req.params.id_Annonce},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


annonces.put('/:id_Annonce', (req, res) => {
  const today = new Date()
  const AnnonceDataUp = {
    sujet: req.body.sujet,
    desc: req.body.desc,
    id_Filiere: req.body.id_Filiere,
    created: today,
  }
  Annonce.update(
    AnnonceDataUp,
    {where:{id_Annonce: req.params.id_Annonce}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




annonces.post('/AddAnnonce', (req, res) => {
  const today = new Date()
  const AnnonceData = {
    sujet: req.body.sujet,
    desc: req.body.desc,
    id_Filiere: req.body.id_Filiere,
    created: today,
    
  }

  Annonce.findOne({
    where: {
        sujet: req.body.sujet
    }
  })
    //TODO bcrypt
    .then(annonce => {
      if (!annonce) {
        Annonce.create(AnnonceData)
            .then(annonce => {
              res.json({ status: annonce.sujet + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'annonce already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = annonces
