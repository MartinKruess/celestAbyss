import { CharDataModel } from "../models/characterSchema";
import { CreatureModel } from "../models/creatureSchema";
import { InventoryModel } from "../models/inventorySchema";

export const tameController = async (req, res) => {
    const characterID = req.body.characterID;
    const creatureID = req.body.creatureID;
    const tamingSkill = req.body.tamingSkill;
    const creatureLevel = req.body.level;

    try {
        // Find Creature
        const creature = await CreatureModel.findById(creatureID);

        // Calculate Taming Chance
        const chance = creature.tamingChance + tamingSkill * 0.3 - creatureLevel * 0.01;

        // Check if tamingChance negative -> fail
        if (chance <= 0) {
            res.status(200).send("Taming failed!");
        }

        // Check if tamingChance positive -> calculate
        const random = Math.random() + chance;
        if (random >= 1) {
            console.log("Taming successful! Add Creature to Inv!")

            // Find Character
            const inventory = await InventoryModel.find(characterID);

            // Check if character already tamed creature
            if (creature.firstTamedBy === undefined) {
                console.log("Du bist der erster!")

                // Update creature
                creature.firstTamedBy = characterID;
                await creature.save();
                
            }else{
                res.status("success").send("Taming Successfull!");
            }

            creature.tamed = true;

            // Update character
            inventory.items.push(creature);
            await inventory.save();

            res.status("success").send("Taming successful!");
        } else {
            res.status("fail").send("Taming failed!");
        }
    } catch (error) {
        res.status(401).send("ERROR in Taming: " + error);
    }
}