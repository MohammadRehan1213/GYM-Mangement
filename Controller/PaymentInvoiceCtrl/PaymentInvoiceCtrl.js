const db = require('../../Models/PaymentInvoiceModel/PaymentInvoiceModel');
const searchFeatures = require("../../utils/searchFeatures");

const getpaginate = async (req, res) => {
    try {
        const productsCount = await db.countDocuments();
        const limit = req.query.limit == undefined || req.query.limit == 0 ? productsCount : req.query.limit;
        const apiFeatures = new searchFeatures(db.find(), req.query)
            .search()
            .pagination(limit);

        let products = await apiFeatures.query;
        await res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


const Getdata = async (req, rsep) => {
    try {
        const result = await db.find({ _id: req.params._id })
        rsep.send(result)
    } catch (error) {
        resp.status(404).json(error.message)

    }
}

const Postdata = async (req, res) => {

    const newUser = await db.create(req.body);

    res.json(newUser);
};

const Putdata = async (req, res) => {
    try {
        let result = await db.updateMany(
            { _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const DeleteData = async (req, res) => {
    try {
        let result = await db.deleteMany({ _id: req.params.id },
            {
                $set: req.body
            })
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = { getpaginate, Getdata, Postdata, Putdata, DeleteData };
