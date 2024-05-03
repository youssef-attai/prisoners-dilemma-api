import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";

import env from "../../../../env";
import UserModel from "../../data/models/user.model";

/**
 * Handles the login of a user
 */
export default async function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  // If user with that username does not exist
  if (!user) {
    res.status(401).json({ summary: "Unauthorized", details: "Invalid username or password" });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401).json({ summary: "Unauthorized", details: "Invalid username or password" });
    return;
  }

  const token = jwt.sign({ username }, env.JWT_SECRET!);

  res.json({ token });
}
