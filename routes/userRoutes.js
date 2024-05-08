import express from "express"
import { registerController, signinController } from "../controllers/userController.js"

export const userRouter = express.Router()

userRouter
    .post("/login", signinController)
    .post("/register", registerController)
    // .patch("/", updateUser)
    // .delete("/", deleteUser)