import { DataTypes } from "sequelize";
import sequelize from "@configs/database.js";

const Student = sequelize.define(
  "student",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    dob: {
      type: DataTypes.DATE,
    },
  },
  {
    // freezeTableName: true // Desativa o pluralização do nome da tabela
    tableName: "students", // Define o nome da tabela
  }
);

console.log(Student === sequelize.models.Student); // true

export default Student;

//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//   age: DataTypes.INTEGER,
//   dob: DataTypes.DATE,
