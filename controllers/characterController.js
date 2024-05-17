import { addStartItemsToInventory } from "../helperFucntions/addStartItems.js";
import { startItems } from "../interactives/startItems.js";
import { CharDataModel } from "../models/characterSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";
import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    try{
        const accountID = req.params.id;
        console.log(accountID)
        const charData = await CharDataModel.find({_id: accountID})
        .populate("skills", "skillName level maxSkillLv")
        .populate("inventory")
        charData ? res.status(200).json(charData) : res.status(404).send("No Characters Found!");
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}

export const newCharData = async (req, res) => {
    try{
        const charData = req.body;
        
        // find account
        const account = await UserDataModel.findById(charData.accountID);
        
        // check account reached max characters
        if(account.characters.length < account.maxChars){
            // Create the character
            const char = await CharDataModel.create(charData);
            
            // Create inventory for the character
            const inventory = await InventoryModel.create(
                { characterID: char._id }
            );

            // Add inventory to the character
            char.inventory = inventory._id;
            console.log("Inventory Items", inventory.items)

            
            // Add start items to inventory
            await addStartItemsToInventory(inventory._id, startItems);
            
            // find all skills based on character class
            const skills = await SkillDataModel.find({ charClass: char.class });
            char.skills = skills.map(skill => skill._id);

            // Add skills to the character
            // char.skills = newSkillData;

            // Save the character with the new data
            await char.save();

            // Update the account with the new character ID
            await account.characters.push(char._id);
            await account.save();

            res.status(200).send("New Character Created!");
        }else{
            res.send({status: "full", msg: "Character Limit Reached!"});
        }
    }
    catch(error){
        res.status(401).send("ERROR in Char: " + error);
    }
}

export const deleteCharacter = async (req, res) => {
    const characterID = req.params.id;
    try{
       await UserDataModel.findAndDelete({_id: characterID});
       await UserDataModel.findAndDelete({characterID: characterID});
       res.send({status: "success", msg: "Character Deleted!"})
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}