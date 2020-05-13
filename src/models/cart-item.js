const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost'
})

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
})

module.exports = CartItem
