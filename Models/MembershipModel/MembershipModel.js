const mongoose = require("mongoose");

const data = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  ZipCode: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Roll: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  UserImage: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});
module.exports = mongoose.model("membership", data);

