import { CreatureModel } from "../models/creatureSchema.js";
import { InventoryModel } from "../models/inventorySchema.js";

export const tameController = async (req, res) => {
    const characterID = req.body.characterID;
    const cardName = req.body.cardName;
    const tamingSkill = req.body.tamingSkill;

    try {
        // Find Card in Inventory
        const inventory = await InventoryModel.findOne({ characterID: characterID })
        console.log(inventory.items)

        const card = inventory.items.find(item => {
            return item.name === cardName && category === "Emptycard"
        });

        //! Populte items before finish taming

        if (!card) {
            res.status(404).send("Card not found!");
            return
        } else {
            console.log("Card found!", card)
            res.send("Card found!");
            return
        }

        const creature = await CreatureModel.findOne({ name: cardName });

        // Calculate Taming Chance
        const chance = creature.tamingChance + tamingSkill * 0.3;

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

            } else {
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