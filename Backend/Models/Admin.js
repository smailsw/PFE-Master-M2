const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'admin',
  {
    id: {
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
    // sexe: {
    //     type: Sequelize.STRING
    //   },
    // date_naissance: {
    //     type: Sequelize.DATE
    //   },
    // telephone: {
    //     type: Sequelize.STRING
    //   },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)