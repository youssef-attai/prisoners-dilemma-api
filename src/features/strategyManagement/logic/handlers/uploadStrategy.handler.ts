import { Request, Response } from "express";

export default function uploadStrategyHandler(req: Request, res: Response) {
  res.json({ summary: "Success", details: "The file was successfully uploaded" });
}
