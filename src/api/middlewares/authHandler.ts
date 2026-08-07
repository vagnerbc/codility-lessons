import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { userToken } from "../types";

export const authHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      error: "Token not found or not well formated",
    });
  }

  try {
    const payload = verify(token as string, "secret", {});

    req.user = payload as userToken;
  } catch (error) {
    res.status(401).json({
      error: "Not authorized!",
    });
  }

  next();
};
