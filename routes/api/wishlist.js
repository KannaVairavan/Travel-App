const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

// Matches with "/api/books"
router.route("/")
  .get(wishlistController.findAll)
  .post(wishlistController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wishlistController.findById)
  .put(wishlistController.update)
  .delete(wishlistController.remove);

module.exports = router;