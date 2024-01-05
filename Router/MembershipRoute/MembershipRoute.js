const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadCloudinaryimg=require('../../middlewares/singleImgUpload')
const { getpaginate,Getdata, Postdata, Putdata, DeleteData } = 
require('../../Controller/MembershipCtrl/MembershipCtrl')

const router = express.Router();

router.get("/", getpaginate);
router.get("/:_id", Getdata);

router.post("/",upload.single('image'),uploadCloudinaryimg, Postdata)
router.put("/:_id",upload.single('image'),uploadCloudinaryimg,Putdata)
router.delete("/:id", DeleteData)

module.exports = router;