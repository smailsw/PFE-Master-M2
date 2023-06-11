const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'module',
  {
    id_Module: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    nbrHeur: {
      type: Sequelize.STRING
    },
    id_Prof:{
      type:Sequelize.NUMBER
    },
    id_Filiere:{
      type:Sequelize.NUMBER
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)