const router = require("express").Router();
const tripController = require("../../controllers/tripController");

// Matches with "/api/books"
router.route("/")
  .get(tripController.findAll)
  .post(tripController.create);


module.exports = router;
