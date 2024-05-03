import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";

import env from "../../../../env";
import UserModel from "../../data/models/user.model";

/**
 * Handles the registration of a new user
 */
export default async function registerHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  // If user with that username already exists
  if (user) {
    res.status(409).json({ summary: "Conflict", details: "A user with that username already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  const token = jwt.sign({ username }, env.JWT_SECRET!);

  res.json({ token });
}
