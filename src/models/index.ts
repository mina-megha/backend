import { Sequelize } from "sequelize-typescript";
import { models } from "./models";
import { Users } from "./user.model";

 const conn = new Sequelize("mina",'root','',{
    host:"localhost",
    port:3306,
    models:[Users],
    dialect:'mysql'
})



export default conn;