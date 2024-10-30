const database = require("../configs/db.config");
const Sequelize = require("sequelize");

const Original = database.define("usuario", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  desc:{
    type: Sequelize.STRING,
    allowNull:false,
  },
});

module.exports = Original;