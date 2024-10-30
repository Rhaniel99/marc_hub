const express = require("express");
const Original = require("./src/models/user_model.js");
const PORT = process.env.PORT || 4001;
const app = express();
const database = require("./src/configs/db.config.js"); // Importar o arquivo db.config

app.use(express.json());
app.post("/data", async (req, res) => {
  const { name, desc } = req.body;
  try {
    // Inserir os dados no banco de dados usando Sequelize
    const newUser = await Original.create({ name, desc }); // Cria um novo usuário com os dados fornecidos
    res.json({ message: "User added successfully", userId: newUser.id });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Error adding user' });
  }
});

app.listen(PORT, async () => {
  console.log(`Rodando na porta ${PORT}`);
  await database.sync(); // Sincronizar o banco de dados com os modelos
});
