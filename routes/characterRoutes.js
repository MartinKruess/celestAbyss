import express from "express"
import {getCharData, newCharData, updateCharData, deleteCharacter} from "../controllers/characterController.js"

export const characterRouter = express.Router()

itemRouter
    .get("/", getCharData)
    .post("/", newCharData)
    .patch("/", updateCharData)
    .delete("/", deleteCharacter)

