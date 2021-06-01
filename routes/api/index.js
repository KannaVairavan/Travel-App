const router = require("express").Router();
const userRoutes=require("./user");
const tripRoutes=require("./trip");
// user route
router.use("/user", userRoutes);
// trip route
router.use("/trip", tripRoutes);

module.exports=router;
