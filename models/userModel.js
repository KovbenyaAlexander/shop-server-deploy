const { Schema, model } = require("mongoose");

// const GoodsSchema = new Schema({
//   id: { type: String, required: true },
//   count: { type: Number, required: true },
//   user: { type: Schema.Types.ObjectId, ref: "User" },
// });

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  goods: { type: Map, of: String },
});

module.exports = model("User", UserSchema);
