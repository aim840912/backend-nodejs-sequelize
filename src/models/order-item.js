const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
})

const OrderItem = sequelize.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
})

module.exports = OrderItem
