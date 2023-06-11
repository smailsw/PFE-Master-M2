const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('pfedb', 'root', 'ismail', {
  host: 'pfe-test-mysql', // Replace with Docker container name or IP address
  port: '3306', // Replace with Docker container port if mapped differently
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    underscored: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// const Employee= require('../Models/Employee')(sequelize, Sequelize)
// const Project= require('../Models/Project')(sequelize, Sequelize)

// let Employee = sequelize.define('employee', {
//   name: Sequelize.STRING,
//   cv: Sequelize.STRING,

// });
// let Project = sequelize.define('project', {
//   name: Sequelize.STRING,
//   cv: Sequelize.STRING,
// });
// Employee.belongsTo(Project);
// Project.hasOne(Employee);

// Project.findAll({include: [Employee]}).then(projects => {

//   projects.forEach(project => {
//       console.log(project.name, project.cv ,'belongs to user',project.employee.name);
//   });
// }).finally(() => {
//   sequelize.close();
// });


db.sequelize = sequelize
db.Sequelize = Sequelize

//Models/tables
// const etudiants = require('../Models/Etudiant.js')(sequelize, Sequelize);
// const filieres = require('../models/Filiere.js')(sequelize, Sequelize);

//relations
// etudiants.hasOne(filieres)
// filieres.belongsTo(etudiants)



module.exports = db