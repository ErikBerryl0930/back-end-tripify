const { category } = require('../models')

class CategoryController {

    static async getController(req, res) {
        try {
            let categories = await category.findAll()

            res.status(200).json(categories)

        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

}

module.exports = CategoryController