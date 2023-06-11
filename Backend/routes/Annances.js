const express = require('express')
const annances = express.Router()
const cors = require('cors')

const Annance = require('../Models/Annance')
annances.use(cors())

process.env.SECRET_KEY = 'secret'

annances.get('/', (req, res) => {
    Annance.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})




annances.get('/:id_Annance', (req, res) => {
    Annance.findOne(
   { where: {id_Annance: req.params.id_Annance}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})


//get annance by id_filiere
annances.get('/ByIdFiliere/:id_Filiere', (req, res) => {
    Annance.findAndCountAll(
   { where: {id_Filiere: req.params.id_Filiere}
    }
    
  )
.then(result=>res.json(  {'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

annances.delete('/delete/:id_Annance', (req, res) => {
    Annance.destroy({
    where: {id_Annance: req.params.id_Annance},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


annances.put('/:id_Annance', (req, res) => {
  const today = new Date()
  const AnnanceDataUp = {
    sujet: req.body.sujet,
    desc: req.body.desc,
    id_Filiere: req.body.id_Filiere,
    created: today,
  }
  Annance.update(
    AnnanceDataUp,
    {where:{id_Annance: req.params.id_Annance}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




annances.post('/AddAnnance', (req, res) => {
  const today = new Date()
  const AnnanceData = {
    sujet: req.body.sujet,
    desc: req.body.desc,
    id_Filiere: req.body.id_Filiere,
    created: today,
    
  }

  Annance.findOne({
    where: {
        sujet: req.body.sujet
    }
  })
    //TODO bcrypt
    .then(annance => {
      if (!annance) {
        Annance.create(AnnanceData)
            .then(annance => {
              res.json({ status: annance.sujet + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      } else {
        res.json({ error: 'annance already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = annances
