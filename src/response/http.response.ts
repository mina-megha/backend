import { Response } from "express";
export const Ok = (
    response: Response,
    message?: string,
    body?: any
  ): Response => {
    return response.send({
      status: true,
      code: 200,
      message: message ? message : null,
      data: body ? body : null,
    });
  }

  export const Create = (
    response: Response,
    message?: string,
    body?: any
  ): Response => {
    return response.send({
      status: true,
      code: 201,
      message: message ? message : null,
      data: body ? body : null,
    });
  };


  export const BadRequest = (response: Response, body?: any): Response => {
    const code = body?.code || 400;
    return body
      ? response.status(code).send({
          status: false,
          code: code,
          error: { message: body ? body.message : "Something Wrong!" },
        })
      : response.status(code).send({ status: false });
  };

  export const unAuthenticated = (
    response: Response,
    message: string = ""
  ): Response => {
    return response.status(401).send({
      status: false,
      error: {
        message: message ? message : "User is not authenticated",
        detail: "No valid access token provided",
      },
    });
  };