var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
const db = require('./database/db.js')

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

//filieres
var Filieres = require('./routes/Filieres')

app.use('/filieres', Filieres)

//modulles
var Modules = require('./routes/Modules')

app.use('/modules', Modules)

//profs
var Profs = require('./routes/Profs')

app.use('/profs', Profs)

//etudiant
var Etudiants = require('./routes/Etudiants')

app.use('/etudiants', Etudiants)


//admin
var Admins = require('./routes/Admins')

app.use('/admins', Admins)

//seance
var Seances = require('./routes/Seances')

app.use('/seances', Seances)

//absence
var Absences = require('./routes/Absences')

app.use('/absences', Absences)

//annonce
var Annonces = require('./routes/Annonces')

app.use('/annonces', Annonces)

//test connection
app.get('/', (req, res) => {
  res.sendStatus(200);
});
//test db connection
app.get('/dbtest', (req, res) => {
  db.sequelize
    .authenticate()
    .then(() => {
      res.send('Database connection successful!');
    })
    .catch((error) => {
      console.error('Database connection error:', error);
      res.sendStatus(500);
    });
});
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})