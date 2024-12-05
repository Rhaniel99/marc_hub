import { DataTypes } from 'sequelize';
import sequelize from '@configs/database.js';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
}, {
    // freezeTableName: true // Desativa o pluralização do nome da tabela
    tableName: 'users' // Define o nome da tabela
});

console.log(User === sequelize.models.User); // true

export default User;