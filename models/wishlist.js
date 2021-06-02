const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishListSchema  = new Schema({
    wish :{ type: String, required: true },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  date: { type: Date, default: Date.now }
});

const Wishlist = mongoose.model("Wishlist", WishListSchema );

module.exports = Wishlist;