import mongoose from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const userModelName = "User";

/**
 * The user model.
 */
const UserModel = mongoose.model<IUser>(userModelName, userSchema);

export default UserModel;
