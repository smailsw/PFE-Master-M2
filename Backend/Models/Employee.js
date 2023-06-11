const Sequelize = require('sequelize')
const db = require('../database/db.js')

let Employee = db.sequelize.define('employee', {
  name: Sequelize.STRING,
  cv: Sequelize.STRING,

});