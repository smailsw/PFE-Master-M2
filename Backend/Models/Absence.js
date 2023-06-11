const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'absence',
  {
    id_Absence: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_Etudiant:{
      type: Sequelize.NUMBER,
      unique: false,
      allowNull: false
    },
    id_Module:{
      type: Sequelize.NUMBER,
      unique: false,
      allowNull: false
    },
    id_Seance:{
      type: Sequelize.NUMBER,
      
    },
    id_Filiere:{
      type: Sequelize.NUMBER,
      
    },
    
    created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
   
  },
  {
    timestamps: false
  }
)