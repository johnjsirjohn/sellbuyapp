const Sequelize = require('sequelize');
const db = require('../db.js');

const Ads = db.define(
  'ad',
  {
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    description: {
      type: Sequelize.STRING,
      field: 'description'
    },
    picture: {
      type: Sequelize.STRING,
      field: 'url'
    },
    price: {
      type: Sequelize.INTEGER,
      field: 'price'
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    },
    phone: {
      type: Sequelize.INTEGER,
      field: 'phone'
    }
  },
  { tableName: 'ads' }
);
module.exports = Ads;
