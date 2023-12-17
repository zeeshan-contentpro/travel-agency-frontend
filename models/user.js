import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//TODO: Need to check that
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
