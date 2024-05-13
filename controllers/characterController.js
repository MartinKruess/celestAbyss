import { CharDataModel } from "../models/characterSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";
import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    try{
        const accountID = req.params.id;
        console.log(accountID)
        const charData = await CharDataModel.find({accountID: accountID});
        charData ? res.status(200).json(charData) : res.status(404).send("No Characters Found!");
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}

export const newCharData = async (req, res) => {
    try{
        const charData = req.body;
        console.log(charData)
        const account = await UserDataModel.findById(charData.accountID);
        
        if(account.characters.length < account.maxChars){
            const newChar = new CharDataModel(charData);
            const inventory = InventoryModel.create({charID: newChar._id});
            console.log(newChar)
            newChar.inventory = inventory._id;

            const skills = await SkillDataModel.find({class: newChar.class});
            const newSkilLData = skills.map(skill => ({
                skillID: skill._id,
                maxSkillLv: skill.maxSkillLv
            }));
            await SkillDataModel.insertMany(newSkilLData);
            await newChar.save();
            res.status(200).send("New Character Created!");
        }else{
            res.send({status: "full", msg: "Character Limit Reached!"});
        }
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}

export const deleteCharacter = async (req, res) => {
    try{
       
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}