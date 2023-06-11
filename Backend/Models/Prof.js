const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'prof',
  {
    id_Prof: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    adresse: {
        type: Sequelize.STRING
      },
    sexe: {
        type: Sequelize.STRING
      },
    cin: {
        type: Sequelize.NUMBER
      },
    telephone: {
        type: Sequelize.STRING
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