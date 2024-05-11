import express from "express"
import {getItems, addItem} from "../controllers/itemController.js"

export const itemRouter = express.Router()

itemRouter
    .get("/", getItems)
    .get("/add", addItem)
    .post("/", addItem)

