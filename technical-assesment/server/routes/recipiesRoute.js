const express = require("express");
const router = express.Router();

const controller=require('../controller/recipiesController')

const recepiesRouter =router.get("/getAll",controller.getrecepie);


module.exports = recepiesRouter;
