const { category } = require("../models");

class CategoryController {
  static async getListCategory(req, res) {
    try {
      let listCategories = await category.findAll({
        attributes: ["id", "category_name"],
        order: ["id"]
      });

      res.status(200).json(listCategories);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }


  static async getCategoryById(req, res) {

    try {
      let listCategories = await category.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'category_name']
      });

      res.status(200).json(categories);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async addCategory(req, res) {
    const { category_name } = req.body;
    try {
      let found = await category.findOne({
        where: {
          category_name,
        },
      });

      if (found)
        return res
          .status(400)
          .json({ success: false, message: "category already exist" });

      let categories = await category.create({
        category_name,
      });

      res.status(201).json({ message: "category has been added" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteCategory(req, res) {
    const id = req.params.id;
    try {
      let result = await category.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({ message: "category successfully removed" })
        : res.status(404).json({ message: "category not found" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async editCategory(req, res) {
    try {
      const { category_name } = req.body;

      const updatedCategory = await category.update(
        {
          category_name,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      updatedCategory[0] === 1
        ? res.status(200).json({ message: "category successfully updated" })
        : res.status(404).json({ message: "category not found" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

module.exports = CategoryController;
