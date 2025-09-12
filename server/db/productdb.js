const mongoose = require("mongoose")

const pschema = mongoose.Schema({
  pname: { type: String, required: true },
  pprice: { type: Number, required: true, min: 0 },
  pimage: { type: String, required: true },
  pdetails: { type: String, required: true }
})

module.exports = mongoose.model("product",pschema)