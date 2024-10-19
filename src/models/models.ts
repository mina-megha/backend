import conn from ".";
import { Users } from "./user.model";

export const getConncetion = () => {
    return conn;
  };
  
  export const getTransaction = () => {
    return conn.transaction();
  };

export const models :any=[Users]