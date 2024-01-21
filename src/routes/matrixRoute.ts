import { Router } from "express";
import upload from "../util/multer";
import {
  echo,
  flatten,
  invert,
  multiply,
  sum,
} from "../controllers/matrixController";

const router = Router();

router.use(upload.single("file"));

router.post("/echo", echo);

router.post("/invert", invert);

router.post("/flatten", flatten);

router.post("/sum", sum);

router.post("/multiply", multiply);

export default router;
