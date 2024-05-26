import { CreatureModel } from "../models/creatureSchema.js"

export const addCreatureController = async (req, res) => {
    const newCreatureName = req.body.name

    const creature = await CreatureModel.findOne({ name: newCreatureName })

    if (creature) {
        res.send("Creature already exists")
        return
    }
    const newCreature = req.body
    await CreatureModel.create(newCreature)
    res.send("Creature added")
}