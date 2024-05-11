import { ItemModel } from "../models/itemSchema.js"
import { itemBackup } from "../scripts/itemBackup.js"

import {items} from "../scripts/itemData.js"

export const addItem = async (req, res, next) => {
    try {
        // const itemsToSave = req.body
        
        const itemsToSave = items
        const restructuredItems = itemsToSave.map(item => {
                item.attributes = {
                slots: item.slots,
                level: item.level,
                maxlevel: item.maxlevel,
                pang: item.pang,
                mang: item.mang,
                pdeff: item.pdeff,
                crit: item.crit,
                block: item.block,
                speed: item.speed,
                health: item.health,
                mana: item.mana,
                agility: item.agility,
                ambush: item.ambush,
                dexerity: item.dexerity,
                faith: item.faith,
                int: item.int,
                strength: item.strength,
                victim: item.victim,
                vita: item.vita,
                wisdom: item.wisdom,
                luck: item.luck,
                boni:{
                    description: item.boni_description,
                    type: item.boni_type,
                    value: item.boni_value
                },set:{
                    amount: item.set_amount,
                    description: item.set_description,
                    type: item.set_type,
                    value: item.set_value
                },
                effect:{
                    description: item.effect_description,
                    type: item.effect_type,
                    chance: item.effect_chance,
                    value: item.effect_value,
                    duration: item.effect_duration
                }
            }
            return item
        })
        console.log(restructuredItems[0])
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