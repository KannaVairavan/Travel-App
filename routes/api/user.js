const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  
  .post(userController.create);
  

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/signup")
  .post(userController.create)

router
  .route("/login")
  .post(userController.login)
  .get(userController.login)

router
  .route("/logout")
  
module.exports = router;
