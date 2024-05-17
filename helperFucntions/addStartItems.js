import { InventoryModel } from "../models/inventorySchema.js";

export const addStartItemsToInventory = async (inventoryId, startItems) => {
    try {
        const inventory = await InventoryModel.findById(inventoryId);
        if (!inventory) {
            throw new Error("Inventory not found");
        }
        // Add start items to inventory
        startItems.forEach(async (item) => {
            inventory.items.push(item);
        });
        await inventory.save();
    } catch (error) {
        throw new Error("Error adding start items to inventory: " + error.message);
    }
};