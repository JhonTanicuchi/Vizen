const express = require("express");
const router = express.Router();

const {
  getItems,
} = require("../controllers/user.controller");

router.get("/", getItems);

module.exports = router;
