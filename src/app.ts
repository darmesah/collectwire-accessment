import express from "express";

import matriceRoute from "./routes/matrixRoute";

import error404 from "./middlewares/404";
import errorHandler from "./middlewares/errorHandler";

const PORT = 8088;

const app = express();

app.use(express.json());

app.use(matriceRoute);

app.use(error404);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
