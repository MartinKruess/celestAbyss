import { CharDataModel } from "../models/characterSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";
import { SkillDataModel } from "../models/skillSchema.js";
import { UserDataModel } from "../models/userSchema.js";

export const getCharData = async (req, res) => {
    try{
        const accountID = req.params.id;
        console.log(accountID)
        const charData = await CharDataModel.find({_id: accountID})
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
        const account = await UserDataModel.findById(charData.accountID);
        account.characters.push(charData._id);
        await account.save();
        
        if(account.characters.length < account.maxChars){
           // Create the character
            const char = await CharDataModel.create(charData);
            console.log("charCreated", char);

            // Create inventory for the character
            const inventory = await InventoryModel.create({ characterID: char._id });
            console.log("Inventory Created", inventory);

            // Add start items to inventory if needed
            const startItems = [{itemID: '663ff47dfa3f1526a217f5e3'}];
            inventory.items.push(...startItems);
            await inventory.save();

            // Retrieve skills based on character class
            const skills = await SkillDataModel.find({ charClass: char.class });
            const newSkillData = skills.map(skill => ({
                skillID: skill._id,
                maxSkillLv: skill.maxSkillLv
            }));

            // Assign inventory and skills to the character
            char.inventory = inventory._id; // Store the inventory ID
            char.skills = newSkillData;

            // Save the character with the new data
            await char.save();

            // Update the account with the new character ID
            account.characters.push(char._id);
            await account.save();

            res.status(200).send("New Character Created!");
        }else{
            res.send({status: "full", msg: "Character Limit Reached!"});
        }
    }
    catch(error){
        res.status(401).send("ERROR in Char: " + error.message);
    }
}


//  // Create Character
//  const char = await CharDataModel.create(charData);
//  console.log("charCreated", char)
 
//  // Create Inventory
//  const inventory = await InventoryModel.create({characterID: char._id});
//  console.log("Inventory Created", inventory)
 
//  const skills = await SkillDataModel.find({charClass: char.class});
//  const newSkilLData = skills.map(skill => ({
//      skillID: skill._id,
//      maxSkillLv: skill.maxSkillLv
//  }));
//  char.inventory = inventory._id;
//  char.inventory.push(startItems)

//  char.skills = newSkilLData; 
//  await char.save(); 
//  res.status(200).send("New Character Created!");

export const deleteCharacter = async (req, res) => {
    try{
       
    }
    catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}