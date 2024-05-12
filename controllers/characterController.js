import { CharDataModel } from "../models/characterSchema.js";

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
        // If account.characters.length < account.maxChars -> create new character
        const newChar = new CharDataModel(charData);
        await newChar.save();
        console.log(newChar)
        res.status(200).send("New Character Created!");
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