
const Sequelize = require('sequelize')
let Project = sequelize.define('project', {
    name: Sequelize.STRING,
    cv: Sequelize.STRING,
  
  });
  module.exports = Project