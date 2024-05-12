import express from "express"

export const inventoryRouter = express.Router()

inventoryRouter
    .get("/", getInventoryData)
    // .post("/", registerController)
    .patch("/", updateInventoryByLoot)
    // .delete("/", deleteUser)