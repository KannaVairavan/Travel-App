const router = require("express").Router();
const userRoutes=require("./user");
const tripRoutes=require("./trip");
const wishlistRoutes=require("./wishlist");
// user route
router.use("/user", userRoutes);
// trip route
router.use("/trip", tripRoutes);

module.exports=router;
// trip route
router.use("/wishlist", wishlistRoutes);

module.exports=router;

