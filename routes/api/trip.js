const router = require("express").Router();
const tripController = require("../../controllers/tripController");

// Matches with "/api/books"
router.route("/")
  .get(tripController.findAll)
  .post(tripController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tripController.findById)
  .put(tripController.update)
  .delete(tripController.remove);

module.exports = router;