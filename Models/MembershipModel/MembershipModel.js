const mongoose = require("mongoose");

const department = mongoose.Schema({

    membershipName: {
        type: String,
        required: true,
    },
    membershipCategory:
    {
        type: String,
        required: true,
    },
    membershipPeriod:
    {
        type: String,
        required: true,
    },
    membershipLimit:
    {
        type: String,
        required: true,
    },
    membershipAmount:
    {
        type: String,
        required: true,
    },
    selectClass: {
        type: String,
        required: true,
    },
    installmentPlanAmount:
    {
        type: String,
        required: true,
    },
    installmentPlan:
    {
        type: String,
        required: true,
    },
    signupFee:
    {
        type: String,
        required: true,
    },
    membershipDescription:
    {
        type: String,
        required: true,
    },
    membershipImage:
    {
        type: String,
        required: true,
    }
},
{
  timestamps: true,
})
module.exports = mongoose.model("addmembership", department);
