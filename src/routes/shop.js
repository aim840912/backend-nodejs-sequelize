const express = require('express')
const Product = require('../models/product')

const auth = require('../middleware/auth')
const { status } = require('../helpers/status')

const router = express.Router()

router.get('/', (req, res) => {
  Product.findAll()
    .then(products => {
      res.status(status.success).json(products)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
