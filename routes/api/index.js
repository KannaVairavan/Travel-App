const router = require("express").Router();
const userRoutes=require("./user");
const tripRoutes=require("./trip");
const wishlistRoutes=require("./wishlist");
const nearbySearch=require("./nearbySearch");
// user route
router.use("/user", userRoutes);
// trip route
router.use("/trip", tripRoutes);
// use nearbySearch
router.use("/nearbySearch", nearbySearch);

module.exports=router;
// trip route
router.use("/wishlist", wishlistRoutes);

module.exports=router;

