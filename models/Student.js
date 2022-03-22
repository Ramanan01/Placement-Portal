const { Double, Integer } = require("mongodb")
const { Schema, model } = require("mongoose")

const Student = new Schema({
  email:String,
  password:String,
  fullname:String,
  rollno:String,
  dept:String,
  tenth: Integer,
  twelfth: Integer,
  CGPA: Double,
  phone: String
})

module.exports = model("Student", Student)