import express from "express"
import { addCreatureController } from "../controllers/creatureController.js"
import { tameController } from "../controllers/tameController.js"

export const creatureRouter = express.Router()

creatureRouter
    .post("/add", addCreatureController)
    .post("/tame", tameController)
// .patch("/", updateUser)
// .delete("/", deleteUser)