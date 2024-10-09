const Router = require("express").Router();
const {
  createItem,
  getItems,
  updateItem,
} = require("../controllers/controllers");

Router.post("/", createItem);
Router.get("/", getItems);
Router.put("/:id", updateItem);
Router.delete("/:id", deleteItem);

module.exports = Router;
