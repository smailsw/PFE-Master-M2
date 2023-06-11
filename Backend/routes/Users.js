const express = require('express')
const users = express.Router()
const router= require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../Models/User')
users.use(cors())


process.env.SECRET_KEY = 'secret'



users.get('/', (req, res) => {
    User.findAndCountAll()
.then(result=>res.json({'data' : result['rows'],'count' : result['count'] } ))
.catch(err => res.status(400).json('Error: '+err));
})

users.get('/:id', (req, res) => {
  User.findOne(
   { where: {id: req.params.id}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})
users.get('/role/:role', (req, res) => {
  User.findAndCountAll(
   { where: {role: req.params.role}
    }
    
  )
.then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})


users.delete('/dellete/:id', (req, res) => {
  User.destroy({
    where: {id: req.params.id},
  })
.then(result=>res.json({ result} ))
.catch(err => res.status(400).json('Error: '+err));
})

// /users/78   get users
// profs/54   get prof//il faut crytper le password avant update
users.put('/:id', (req, res) => {
  const today = new Date()
  const userDataUp = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    role: req.body.role,
    created: today
  }
  User.update(
    userDataUp,
    {where:{id: req.params.id}})
  .then(result=>res.json( result ))
.catch(err => res.status(400).json('Error: '+err));
})

//login
users.post('/login', (req, res) => {
  console.log('login--------',req.body)
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        // console.log('user----------->',user)
        console.log('------------------>',user.password)
        console.log('------------------>',req.body.password)

        var result = bcrypt.compare(req.body.password, user.password);
        console.log('------------------>',result)

        if (result) {
         
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          console.log('user------------------------->',user)
          const data = {token : token , user : user} ;
          console.log('data------------------>',data)
          
          res.send(data)
          
         
        } else {
          res.status(400).json({ error: 'Password is not correct ' })       
         }              
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})


users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = users

// login() {
// service.login(data) ;
// }

// un autre fichier loginService 

// login() {
//   axios.post(......)
// }

// envoie de login et password via le front 
// creation de la route /login 
// dans la route login les etapes sont  : 
//     recherche dans la base de donnée par email
//     si user existe vérifier si le password est bon si ok return user 
//     sinn return errur password ou username non correct 
