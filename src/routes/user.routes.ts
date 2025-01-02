import { Router } from "express";
import { Request, Response } from "express";
import * as controller from "../controller/user.controller";

const router = Router();

router.post("/", async (request: Request, response: Response) => {
  let res = await controller.register(request, response);
  response.send(res);
});
router.post("/list", controller.list);

export default router;
