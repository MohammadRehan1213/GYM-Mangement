const mongoose = require("mongoose");

const department = mongoose.Schema({

    productName : {
        type: String,
        required: true,
    },
    productPrice :
    {
        type: String,
        required: true,
    },
    productQuantity :
    {
        type: String,
        required: true,
    },
},
{
  timestamps: true,
})
module.exports = mongoose.model("addproduct", department);


// {
//     "productName":"laptop",
//     "productPrice":"50000",
//     "productQuantity":"11"
// }