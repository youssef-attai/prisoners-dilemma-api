import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import env from "../../../../env";

/**
 * Middleware that decodes a token from the authorization header and adds the username to the request body
 */
export default async function decodeTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ summary: "Unauthorized", details: "No authorization header was present in the request headers" });
    return;
  }

  const splitAuthHeader = authHeader.split(" ");

  if (splitAuthHeader.length != 2) {
    res.status(401).json({ summary: "Unauthorized", details: "The authorization header in the request headers was in an incorrect format" });
    return;
  }

  const [_, token] = splitAuthHeader;

  if (!token) {
    res.status(401).json({ summary: "Unauthorized", details: "No token was found in the authorization header" });
    return;
  }

  let decoded: jwt.JwtPayload;

  try {
    decoded = jwt.verify(authHeader, env.JWT_SECRET!) as jwt.JwtPayload;
  } catch (error) {
    res.status(401).json({ summary: "Unauthorized", details: "The provided token was invalid" });
    return;
  }

  req.body.username = decoded.username;

  next();
}
