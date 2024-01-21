import { RequestHandler } from "express";

import {
  bufferData,
  flattenMatrix,
  invertMatrix,
  multiplyMatrix,
  sumMatrix,
} from "../services/matrixService";

export const echo: RequestHandler = (req, res, next) => {
  const csvFile = req.file?.buffer;

  const echoMatrix = bufferData(csvFile?.toString()).csvFile;

  res.send(echoMatrix);
};

export const invert: RequestHandler = (req, res, next) => {
  const csvFile = req.file?.buffer;

  const invertedMatrix = invertMatrix(csvFile?.toString());

  res.send(invertedMatrix);
};

export const flatten: RequestHandler = (req, res, next) => {
  const csvFile = req.file?.buffer;

  const flatMatrix = flattenMatrix(csvFile?.toString());

  res.send(flatMatrix);
};

export const sum: RequestHandler = (req, res, next) => {
  const csvFile = req.file?.buffer;

  const sumOfMatrix = sumMatrix(csvFile?.toString());

  res.send(sumOfMatrix);
};

export const multiply: RequestHandler = (req, res, next) => {
  const csvFile = req.file?.buffer;

  const matrixMultiply = multiplyMatrix(csvFile?.toString());

  res.send(matrixMultiply);
};
