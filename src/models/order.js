const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
})

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})

module.exports = Order
