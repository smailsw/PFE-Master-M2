const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'seance',
  {
    id_Seance: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date_Seance: {
      type: Sequelize.DATE
    },
    heurDebut: {
      type: Sequelize.STRING
    },
    heurFin:{
      type:Sequelize.STRING
    },
    type_Seance:{
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    id_Module:{
      type: Sequelize.NUMBER,
     
    },
    id_Filiere:{
      type: Sequelize.NUMBER,
     
    },
  },
  {
    timestamps: false
  }
)