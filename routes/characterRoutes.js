import express from "express"
import {getCharData, newCharData, deleteCharacter} from "../controllers/characterController.js"

export const characterRouter = express.Router()

characterRouter
    .get("/:id", getCharData)
    .post("/", newCharData)
    .delete("/:id", deleteCharacter)

