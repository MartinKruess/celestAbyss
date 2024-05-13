import { CharDataModel } from "../models/characterSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";
import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    try{
        const accountID = req.params.id;
        console.log(accountID)
        const charData = await CharDataModel.find({accountID: accountID})
        .populate("skills", "firstName lastName")
        .populate("inventory", "firstName lastName")
        charData ? res.status(200).json(charData) : res.status(404).send("No Characters Found!");
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}

export const newCharData = async (req, res) => {
    try{
        const charData = req.body;
        // await UserDataModel.findById(charData.accountID);
        const account = await UserDataModel.findByIdandUpdate(charData.accountID, {characters: charData.characters.push(charData._id)});
        
        if(account.characters.length < account.maxChars){
            const char = await CharDataModel.create(charData);
            // const newChar = new CharDataModel(charData);
            const inventory = await InventoryModel.create({characterID: char._id});
            
            const skills = await SkillDataModel.find({charClass: char.class});
            const newSkilLData = skills.map(skill => ({
                skillID: skill._id,
                maxSkillLv: skill.maxSkillLv
            }));
            char.inventory = inventory;
            char.skills = newSkilLData; 
            await char.save(); 
            res.status(200).send("New Character Created!");
        }else{
            res.send({status: "full", msg: "Character Limit Reached!"});
        }
    }
    catch(error){
        res.status(401).send("ERROR in Char: " + error.message);
    }
}

export const deleteCharacter = async (req, res) => {
    try{
       
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}