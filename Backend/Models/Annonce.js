const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'annonce',
  {
    id_Annonce: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sujet: {
      type: Sequelize.STRING
    },
    desc: {
      type: Sequelize.STRING
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