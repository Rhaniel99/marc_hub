import 'dotenv/config';

import express from "express";

import appRoute from '@routes/route.js';

const app = express();

const PORT = process.env.PORT || 4002;

app.use(express.json());

app.use("/api", appRoute);

// app.get("/", (req, res) => {
//   res.json({ msg: `Hello World com Nodemon ${PORT}` });
// });

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});