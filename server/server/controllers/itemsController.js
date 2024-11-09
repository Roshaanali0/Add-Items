const Item = require("../models/itemModel");

//Creating an item
const createItem = async (req, res) => {
  try {
    const { name, price, description, instock, category } = req.body;
    if (!name || !price || !description || !instock || !category) {
      res.status(400).json({ error: "Missing fields required" });
    }
    const data = await Item.create({
      name,
      price,
      description,
      instock,
      category,
    });
    res.status(201).json({ message: "Item added successfully", data: data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occured", error: "Internal Server Error" });
    console.log(error);
  }
};
module.exports = { createItem };
