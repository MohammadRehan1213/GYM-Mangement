const mongoose = require("mongoose");

const department = mongoose.Schema({

    membername : {
        type: String,
        required: true,
    },
    level :
    {
        type: String,
        required: true,
    },
    startdate :
    {
        type: String,
        required: true,
    },
    enddate :
    {
        type: String,
        required: true,
    },
    description :
    {
        type: String,
        required: true,
    },
    slectdays :
    {
        type: String,
        required: true,
    },
    workactivity :
    {
        type: String,
        required: true,
    },
    
},
{
  timestamps: true,
})
module.exports = mongoose.model("workout", department);


// {
//     "membername":"az",
//     "level":"mid",
//     "startdate":"12",
//     "enddate":"15",
//     "description":"done",
//     "slectdays":"today",
//     "workactivity":"active"
// }