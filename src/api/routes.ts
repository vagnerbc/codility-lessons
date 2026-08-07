import express from "express";
import { userController } from "./controller/userController";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:name", userController.getById);

export { router as userRouter };
