import { addStartItemsToInventory } from "../helperFucntions/addStartItems.js";
import { startItems } from "../interactives/startItems.js";
import { CharDataModel } from "../models/characterSchema.js";

import { InventoryModel } from "../models/inventorySchema.js";
import { ItemModel } from "../models/itemSchema.js";
import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    //! Populate Inventory (itemModul & creatureModule (Fullcard)) and Skills
    try {
        const characterID = req.params.id;
        const charData = await CharDataModel.findById({ _id: characterID }).populate({
            path: 'inventory',
            populate: {
                path: 'items.itemID',
                itemModel: ['ItemModel', 'FullCard']
            }
        })
            .populate('skills.skillID');

        console.log("CharData", charData)
        charData ? res.status(200).send(charData) : res.status(404).send("No Characters Found!");
    }
    catch (error) {
        console.log("Error", error)
        res.status(500).send("ERROR: " + error.message);
    }
}

export const newCharData = async (req, res) => {
    try {
        const charData = req.body;

        // find account
        const account = await UserDataModel.findById(charData.accountID);

        // check account reached max characters
        if (account.characters.length < account.maxChars) {
            // Create the character
            const char = await CharDataModel.create(charData);

            // Create inventory for the character
            const inventory = await InventoryModel.create(
                { characterID: char._id }
            );

            // Add inventory to the character
            char.inventory = inventory._id;
            console.log("Inv in Char", char.inventory)

            // find all skills based on character class
            const skills = await SkillDataModel.find({ charClass: char.class });
            char.skills = skills.map(skill => skill._id);

            // Add start items to inventory
            await addStartItemsToInventory(inventory._id, startItems);
            console.log("Inventory added Items", inventory.items)

            // Save the character with the new data
            await char.save();

            // Update the account with the new character ID
            await account.characters.push(char._id);
            await account.save();

            res.status(200).send("New Character Created!");
        } else {
            res.send({ status: "full", msg: "Character Limit Reached!" });
        }
    }
    catch (error) {
        res.status(401).send("ERROR in Char: " + error);
    }
}

export const deleteCharacter = async (req, res) => {
    const characterID = req.params.id;
    try {
        await InventoryModel.deleteOne({ characterID: characterID });
        await CharDataModel.findByIdAndDelete(characterID);
        await UserDataModel.updateOne({ characters: characterID }, { $pull: { characters: characterID } });

        res.send({ status: "success", msg: "Character Deleted!" })
    }
    catch (error) {
        res.status(401).send("ERROR: " + error.message);
    }
}