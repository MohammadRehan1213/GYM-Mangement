const mongoose = require("mongoose");

const department = mongoose.Schema({

    member: {
        type: String,
        required: true,
    },
    membership:
    {
        type: String,
        required: true,
    },
    totalAmount:
    {
        type: String,
        required: true,
    },
    membershipValidform:
    {
        type: String,
        required: true,
    },
    membershipValidto:
    {
        type: String,
        required: true,
    },
},
{
  timestamps: true,
})
module.exports = mongoose.model("paymentinvoices", department);

// {
//     "member":"fhged",
//     "membership":"egedg",
//     "totalAmount":"65454",
//     "membershipValidform":"fbedvc",
//     "membershipValidto":"dcgd"
// }