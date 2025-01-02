import { Sequelize } from "sequelize-typescript";
import { models } from "./models";
import { Users } from "./user.model";

const conn = new Sequelize(
  process.env.DB_NAME || "myDb",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    port: 3306,
    models: [Users],
    dialect: "mysql",
  }
);

export default conn;
