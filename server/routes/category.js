const categoryRoute = require("express").Router();
const CategoryController = require("../controllers/CategoryController");
const { authentication, isAdmin } = require('../middleware/authorization')


categoryRoute.get("/", CategoryController.getListCategory);
categoryRoute.post("/add", authentication, isAdmin, CategoryController.addCategory);
categoryRoute.patch("/edit/:id", authentication, isAdmin, CategoryController.editCategory);
categoryRoute.delete("/remove/:id", authentication, isAdmin, CategoryController.deleteCategory);

module.exports = categoryRoute;
