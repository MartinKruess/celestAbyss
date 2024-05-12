import express from "express"
import { updateInventoryByLoot } from "../controllers/inventoryController.js"

export const inventoryRouter = express.Router()

inventoryRouter
    // .get("/", getInventoryData)
    // .post("/", registerController)
    .patch("/", updateInventoryByLoot)
    // .delete("/", deleteUser)