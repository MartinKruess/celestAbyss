import { InventoryModel } from "../models/inventorySchema"

export const buyController = async (req, res, next) => {
    try {
        const characterID = req.body.characterID
        const itemName = req.body.itemName
        const itemAmount = req.body.amount

        // Find inventory by characterID
        const inventoryFromDB = await InventoryModel.find({characterID: characterID})

        // Find Item by ID in itemDB
        const itemFromDB = await ItemModel.find({name: itemName})

        // Check currency
        if(inventoryFromDB.currency >= (itemFromDB.price * itemAmount) && inventoryFromDB.items.length < inventoryFromDB.size) {
            // Update currency
            inventoryFromDB.currency -= (itemFromDB.price * itemAmount)

            // Update currency in DB
            inventoryFromDB.save()

            // Update inventory
            next()
        } else {
            console.log("Aktion nicht möglich!")
        }
    }
    catch (err) {
        next(err)
    }
}

export const sellController = async (req, res, next) => {}