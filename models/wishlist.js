const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishListSchema  = new Schema({
    location_id:{ type: String, required: true },
    location:{ type: String, required: true },
    coords_Lat:{ type: Number, required: true},
    coords_Lon:{ type: Number, required: true },
    wish :{ type: String },
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