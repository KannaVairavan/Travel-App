const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishListSchema = new Schema({
  location_data: { type: Array },

  wish: { type: String },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  date: { type: Date, default: Date.now },
});

const Wishlist = mongoose.model("Wishlist", WishListSchema);

module.exports = Wishlist;
