import { Request, Response, NextFunction, Errback } from "express";
import { AppError } from "../exceptions";

export const errorHandler = (
  error: Errback,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      error: error.message,
    });
  }

  res.status(500).json({
    error: "Internal server error",
  });
};
