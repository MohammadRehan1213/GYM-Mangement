const mongoose = require("mongoose");

const department = mongoose.Schema({

    member : {
        type: String,
        required: true,
    },
    date :
    {
        type: String,
        required: true,
    },
    product :
    {
        type: String,
        required: true,
    },
    quantity :
    {
        type: String,
        required: true,
    },
},
{
  timestamps: true,
})
module.exports = mongoose.model("addsellproduct", department);
