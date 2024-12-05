import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Cria a instância do Sequelize usando as variáveis de ambiente
const sequelize = new Sequelize(
  process.env.DB_DATABASE,  // Nome do banco de dados
  process.env.DB_USER,      // Usuário do banco de dados
  process.env.DB_PASSWORD,  // Senha do banco de dados
  {
    host: process.env.DB_HOST,  // Host do banco de dados (nome do serviço no Docker Compose)
    dialect: 'postgres',        // Tipo do banco de dados
    port: process.env.DB_PORT,  // Porta do banco de dados
  }
);

// await sequelize.sync({ force: true });

// const dbConn = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conectado ao banco de dados com sucesso!');
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados:', error);
//   }
// };

// export { dbConn };  // Usando export ES6

export default sequelize;
