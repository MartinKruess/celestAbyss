import express from "express"
import { registerController, signinController } from "../controllers/userController"

export const userRouter = express.Router()

itemRouter
    // .get("/", getUserData)
    .post("/", signinController)
    .post("/register", registerController)
    // .patch("/", updateUser)
    // .delete("/", deleteUser)

