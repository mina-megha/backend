
const secret ="SDFGHJKL36SDF%$DFG"

import jwt from "jsonwebtoken";
import { BadRequest } from "../response/http.response";
export const generateToken = (userId: number): string => {
    return jwt.sign({ userId }, secret, {
      expiresIn: "6h",
    });
  };

  export const authenticateToken = async (
    request: any,
    response: any,
    next: any
  ) => {
    const token = request.headers["x-access-token"];
  
    if (!token)
      return BadRequest(response, {
        code: 403,
        message: "a token is required for authentication",
      });
    try {
      const decoded = jwt.verify(token, secret);
  
      request.body.user = decoded;
  
     
      next();
    } catch (error) {
      return BadRequest(response, { code: 401, message: "invalid token" });
    }
  };