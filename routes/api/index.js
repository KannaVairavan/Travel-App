const router = require("express").Router();
const userRoutes=require("./User");
const tripRoutes=require("./location");
router.use("/user", userRoutes);
router.use("/trip", tripRoutes);
module.exports=router;
