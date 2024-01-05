const express = require("express");
const { getpaginate,Getdata,Postdata,Putdata,DeleteData } =
 require('../../Controller/PaymentInvoiceCtrl/PaymentInvoiceCtrl')
const router = express.Router();


router.get("/",getpaginate)
router.get("/:_id",Getdata)

router.post("/", Postdata)
router.put("/:id",Putdata)
router.delete("/:id",DeleteData)

module.exports = router;