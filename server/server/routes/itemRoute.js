const express = require("express");
const { createItem } = require("../controllers/itemsController");
const auth = express.Router();

auth.post("/create", createItem);
module.exports = auth;
