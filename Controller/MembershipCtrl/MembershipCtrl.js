const db = require("../../Models/MembershipModel/MembershipModel");
const searchFeatures = require("../../utils/searchFeatures");

const Getdata = async (req, res) => {
    try {
        const result = await db.find({ _id: req.params._id });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

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


const Postdata = async (req, res) => {
    const uploadedImages = req.uploadedImageUrl;

    const newUser = await db.create({
        FirstName,
        LastName,
        Country,
        State,
        City,
        ZipCode,
        PhoneNo,
        Email,
        Password,
        Roll,
        Address,
        image: uploadedImages,
    });
    res.status(201).json(newUser);
};

const Putdata = async (req, res) => {
    try {
        const uploadedImages = req.uploadedImageUrl;
        const { FirstName, PhoneNo, Email, LastName, Country, State, City, ZipCode, Password, Roll, Address } = req.body;
        let data = await db.updateMany(
            { _id: req.params._id },
            {
                $set: {
                    FirstName,
                    LastName,
                    Country,
                    State,
                    City,
                    ZipCode,
                    PhoneNo,
                    Email,
                    Password,
                    Roll,
                    Address,
                    image: uploadedImages,
                },
            }
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

const DeleteData = async (req, res) => {
    try {
        const result = await db.deleteMany({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports = { getpaginate, Getdata, Postdata, Putdata, DeleteData };
