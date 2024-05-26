import express from "express"
import { registerController, signinController } from "../controllers/userController.js"
import { addCreatureController } from "../controllers/creatureController.js"

export const creatureRouter = express.Router()

creatureRouter
    .post("/add", addCreatureController)
    .post("/register", registerController)
// .patch("/", updateUser)
// .delete("/", deleteUser)