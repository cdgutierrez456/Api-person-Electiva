const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  client_name: {type: String, required: true},
  address: [{
    city: {type: String, required: true},
    code_zip: {type: String, required: true},
    geo: [{
      lat: {type: Number, required: true},
      long: {type: Number, required: true}
    }]
  }],
  contact: {
    email: {type: String, required: true},
    cellphone: {type: String, required: true}
  }
}, {
  timestamps: true,
  versionKey: false,
})

module.exports = mongoose.model("Person", personSchema)
