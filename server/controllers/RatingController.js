const { stat } = require("fs");
const { rating } = require("../models");

class RatingController {
  static async getAllRatings(req, res) {
    try {
      let ratings = await rating.findAll({
        attributes: ['review']
      });
      res.status(200).json(ratings);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async addRating(req, res) {
    const { rate, review, userId, destinationId } = req.body;
    try {
      let ratings = await rating.create({
        rate,
        review,
        userId,
        destinationId,
      });
      res.status(200).json({ message: "rating has been added" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteRating(req, res) {
    const id = req.params.id;
    try {
      let result = await rating.destroy({
        where: {
          id,
        },
      });

      result === 1
        ? res.status(200).json({ message: "rating successfully removed" })
        : res.status(404).json({ message: "rating not found" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async editRating(req, res) {
    try {
      const { rate, review, userId, destinationId } = req.body;

      const updatedRating = await rating.update(
        {
          rate,
          review,
          userId,
          destinationId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      updatedRating[0] === 1
        ? res.status(200).json({ message: "rating successfully updated" })
        : res.status(404).json({ message: "rating not found" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

module.exports = RatingController;
