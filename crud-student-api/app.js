import 'dotenv/config';

import express from "express";

// import appRoute from '@routes/route.js';

const app = express();

const PORT = process.env.PORT || 4003;

app.use(express.json());

// testConnection();

// app.use("/api", appRoute);

app.get("/", (req, res) => {
  res.json({ msg: `Hello World com Nodemon no novo projeto ${PORT}` });
});

app.listen(PORT, () => console.log(`App está sendo executado na porta ${PORT}`));