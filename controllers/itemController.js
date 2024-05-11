import { ItemModel } from "../models/itemSchema.js"
import { itemBackup } from "../scripts/itemBackup.js"

import items from "../data/items.json"

export const addItem = async (req, res, next) => {
    try {
        // const itemsToSave = req.body
        const itemsToSave = items
        await Promise.all(itemsToSave.map(async (item) => {
            await ItemModel(item).save()
        }))
        res.json("Data upload successfull!")
    }
    catch (err) {
        next(err)
    }
}

export const getItems = async (req, res, next) => {
    try {
        const itemsFromDB = await ItemModel.find()
        res.json(itemsFromDB) 
    }
    catch {
        next()
    }
}