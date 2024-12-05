import 'dotenv/config';

import express from "express";

import appRouteStudent from '@routes/student.js';
// import { dbConn } from './src/configs/database.js';

const app = express();

const PORT = process.env.PORT || 4005;

// import User  from '@models/userModel.js';

// User.sync(); // Sincronizar o modelo com o banco de dados
// User.sync( { force: true} ); // Exclui o banco de dados e cria um novo
// User.sync( { alter: true} ); // Altera a estrutura do banco de dados

//  Para sincronizar todos, vá em database.js e descomente sequelize.sync
app.use(express.json());

app.use("/api/student", appRouteStudent);

app.get("/", (req, res) => {
  res.json({ msg: `Hello World com Nodemon no novo projeto ${PORT}` });
});

app.listen(PORT, () => console.log(`App está sendo executado na porta ${PORT}`));

// dbConn();