const express = require('express')
const admins = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Admin = require('../Models/Admin')
admins.use(cors())

process.env.SECRET_KEY = 'secret'

admins.get('/', (req, res) => {
    Admin.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

admins.get('/:id', (req, res) => {
    Admin.findOne(
   { where: {id: req.params.id}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

admins.delete('/delete/:id', (req, res) => {
    Admin.destroy({
    where: {id: req.params.id},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})


admins.put('/:id', (req, res) => {
  const today = new Date()
  const admintDataUp = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    // sexe: req.body.sexe,
    // date_naissance: req.body.date_naissance,
    // telephone: req.body.telephone,
    created: today
  }
  Admin.update(
    admintDataUp,
    {where:{id: req.params.id}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})




admins.post('/AddAdmin', (req, res) => {
  const today = new Date()
  const adminData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    adresse: req.body.adresse,
    // sexe: req.body.sexe,
    // date_naissance: req.body.date_naissance,
    // telephone: req.body.telephone,
    created: today
  }

  Admin.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(admin => {
      if (!admin) {
       
        Admin.create(adminData)
            .then(admin => {
              res.json({ status: admin.first_name + ' add with sucsess!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
      
      } else {
        res.json({ error: 'Admin already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = admins

