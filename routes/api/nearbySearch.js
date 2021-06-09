const router = require("express").Router();
const nearbySearchController = require("../../controllers/nearbySearchController");

// Matches with "/api/nearbySearch"
router.route("/")
  .get(nearbySearchController.nearbySearch)

module.exports = router;