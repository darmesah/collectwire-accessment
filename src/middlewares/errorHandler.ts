import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "An unknown error occurred";

  return res.status(status).json({ message });
};

export default errorHandler;
