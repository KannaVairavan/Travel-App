const router = require("express").Router();
const userRoutes=require("./user");
const wishlistRoutes=require("./wishlist");
const nearbySearch=require("./nearbySearch");
// user route
router.use("/user", userRoutes);
// use nearbySearch
router.use("/nearbySearch", nearbySearch);

module.exports=router;
// trip route
router.use("/wishlist", wishlistRoutes);

module.exports=router;

