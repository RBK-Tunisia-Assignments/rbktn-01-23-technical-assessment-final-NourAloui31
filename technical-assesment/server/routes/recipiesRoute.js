const express = require("express");
const router = express.Router();

const controller=require('../controller/recipiesController')

router.get("/getAll",controller.getRecepie);
router.post("/",controller.addRecepie)
router.delete("/:id",controller.deleteRecepie)
router.put("/:id",controller.updateRecepie)

module.exports = router;
