const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GuideSchema = new Schema({
  guide: {
    type: Object,
  },
  guide_title: {
    type: String,
  },
})

module.exports = Guides = mongoose.model('Guides', GuideSchema)
