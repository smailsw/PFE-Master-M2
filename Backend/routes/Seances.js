const express = require('express')
const seances = express.Router()
const modules = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Seance = require('../Models/Seance')
seances.use(cors())

const Module = require('../Models/Module')
modules.use(cors())

process.env.SECRET_KEY = 'secret'

seances.get('/', (req, res) => {
    Seance.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

modules.get('/test1/:id_Prof', (req, res) => {
  Module.findAndCountAll(
    {
      where: {id_Prof: req.params.id_Prof}
    }
  )
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})
//get seances by id Module
seances.get('/test/:id_Module', (req, res) => {
  Seance.findAndCountAll(
    {
      where: {id_Module: req.params.id_Module}
    }
  )
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

seances.get('/:id_Seance', (req, res) => {
    Seance.findOne(
   { where: {id_Seance: req.params.id_Seance}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

seances.delete('/delete/:id_Seance', (req, res) => {
    Seance.destroy({
    where: {id_Seance: req.params.id_Seance},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


seances.put('/:id_Seance', (req, res) => {
  const today = new Date()
  const seanceDataUp = {
    date_Seance: req.body.date_Seance,
    heurDebut: req.body.heurDebut,
    heurFin: req.body.heurFin,
    type_Seance: req.body.type_Seance,
    id_Module: req.body.id_Module,
    id_Filiere: req.body.id_Filiere,
  
    created: today,
  }
  Seance.update(
    seanceDataUp,
    {where:{id_Seance: req.params.id_Seance}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




seances.post('/AddSeance', (req, res) => {
  console.log('addSeance----')
  const today = new Date()
  const seanceData = {
    date_Seance: req.body.date_Seance,
    heurDebut: req.body.heurDebut,
    heurFin: req.body.heurFin,
    type_Seance: req.body.type_Seance,
    created: today,
    id_Module: req.body.id_Module,
    id_Filiere: req.body.id_Filiere,
    

    

  }
  
  // console.log('--------------------------->',seanceData)

  // Seance.findOne({
  //   where: {
  //       type_Seance: req.body.type_Seance
  //   }
    
  // })
  
  //   .then(seance => {
  //     if (!seance) {
      
        Seance.create(seanceData)
            .then(seance => {
              console.log('--------------->',seance)
               res.json({ status: seance.date_Seance + '  Add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        
      // } else {
      //   res.json({ error: 'seance already exists' })
      // }
    // })
    // .catch(err => {
    //   res.send('error: ' + err)
    // })
})


module.exports = seances
