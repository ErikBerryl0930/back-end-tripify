const ratingRoute = require("express").Router();
const RatingController = require("../controllers/RatingController");

ratingRoute.get("/", RatingController.getAllRatings);
ratingRoute.post("/add", RatingController.addRating);
ratingRoute.patch("/edit/:id", RatingController.editRating);
ratingRoute.delete("/remove/:id", RatingController.deleteRating);

module.exports = ratingRoute;
