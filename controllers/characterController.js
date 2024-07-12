import { addStartItemsToInventory } from "../helperFucntions/addStartItems.js";
import { startItems } from "../interactives/startItems.js";
import { CharDataModel } from "../models/characterSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";

import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    try {
        const characterID = req.params.id;
        const charData = await CharDataModel.findById({ _id: characterID }).populate({
            path: 'inventory',
            populate: {
                path: 'items.itemID',
                // model: (doc) => doc.model,
            }
        }).populate('skills')

        console.log("maxSkillLv", charData.skills[1].maxSkillLv, charData.skills[1].skillName_eng)
        charData ? res.status(200).send(charData) : res.status(404).send("No Characters Found!");
    }
    catch (error) {
        console.log("Error", error)
        res.status(500).send("ERROR: " + error.message);
    }
}

export const newCharData = async (req, res) => {
    console.time("newCharData")
    try {
        const charData = req.body;
        const charClass = req.body.class
        const aurora = ["Druide", "Healer", "Luminet", "Shamane"]
        const umbra = ["Butcher", "Ritualist", "Summoner", "Villian"]
        const human = ["Gladiator", "Herbalist", "Knife", "Hunter"]

        if (umbra.includes(charClass)) {
            charData.race = "Umbra"
        } else if (aurora.includes(charClass)) {
            charData.race = "Aurora"

        } else if (human.includes(charClass)) {
            charData.race = "Human"
        } else {
            res.send({ status: "error", msg: "Class not found!" })
        }
        console.log(charData)

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
            const updatedAccount = await UserDataModel.findById(charData.accountID).populate('characters');
            delete updatedAccount.password;
            // const updatedAccount = await User.findByIdAndUpdate(
            //     charData.accountID,
            //     { $push: { characters: char._id } },
            //     { new: true }
            // ).populate('characters');


            res.status(200).send({ userData: updatedAccount });
        } else {
            res.send({ status: "full", msg: "Character Limit Reached!" });
        }
    }
    catch (error) {
        res.status(401).send("ERROR in Char: " + error);
    }
    console.timeEnd("newCharData")
}

export const deleteCharacter = async (req, res) => {
    const characterID = req.params.id;
    try {
        await InventoryModel.deleteOne({ characterID: characterID });
        await CharDataModel.findByIdAndDelete(characterID);
        const updatedAccount = await UserDataModel.findOneAndUpdate(
            { characters: characterID },
            { $pull: { characters: characterID } },
            { new: true }
        ).populate('characters');
        console.log("updated char:", updatedAccount)

        res.status(200).send({ userData: updatedAccount });
    }
    catch (error) {
        res.status(401).send("ERROR: " + error.message);
    }
}