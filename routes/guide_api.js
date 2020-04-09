const express = require('express')
const router = express.Router()

// Model
const Guides = require('../models/guide')
// @access  Public
router.get('/guides/:id', (req, res) => {
  Guides.findOne({ guide_title: req.params.id }).then((item) => {
    res.json(item.guide)
  })
})

module.exports = router
