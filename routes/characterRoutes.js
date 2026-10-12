import express from "express"
import { ownCharacter } from '../security/middleware.js';
import { characterInput } from '../security/access.js';
import {getCharData, newCharData, deleteCharacter} from "../controllers/characterController.js"

export const characterRouter = express.Router()

characterRouter
    .get("/:id", ownCharacter(req => req.params.id), getCharData)
    .post("/", characterInput, newCharData)
    .delete("/:id", ownCharacter(req => req.params.id), deleteCharacter)

