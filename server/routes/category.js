const categoryRoute = require("express").Router();
const CategoryController = require("../controllers/CategoryController");


categoryRoute.get("/", CategoryController.getListCategory);
categoryRoute.post("/add", CategoryController.addCategory);
categoryRoute.patch("/edit/:id", CategoryController.editCategory);
categoryRoute.delete("/remove/:id", CategoryController.deleteCategory);

module.exports = categoryRoute;
