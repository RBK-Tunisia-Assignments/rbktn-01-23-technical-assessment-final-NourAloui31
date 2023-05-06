const express = require("express");
const router = express.Router();

const controller=require('../controller/recipiesController')

router.get("/getAll",controller.getRecepie);
router.post("/add",controller.addRecepie)
router.delete("/delete/:id",controller.deleteRecepie)


module.exports = router;
