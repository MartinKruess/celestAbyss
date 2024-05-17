import { CharDataModel } from "../models/characterSchema.js"
import { ItemModel } from "../models/itemSchema.js"

// New Item to Inventory
const addItem = async (characterID, itemFromDB, amount) => {
  await CharDataModel.findandUpdate( { _id: characterID }, {  $push: { inventory: itemFromDB, amount: amount } } )
}

// Stack Item to Inventory
const stackItem = async (characterFromDB, itemFromDB, dropAmount) => {
  
  // Load all current stacks of the item
  const itemStacks = characterFromDB.inventory.filter(item => item.name === itemFromDB.name)

  itemStacks.forEach(stack => {
    const spaceLeft = stack.stacksize - stack.amount
 
    if(spaceLeft > 0){
      dropAmount <= spaceLeft ? stack.amount += dropAmount : dropAmount = 0
    } else {
      stack.amount = itemFromDB.stacksize
      dropAmount -= spaceLeft
    }
  })

  if(dropAmount > 0){
    const char = await CharDataModel.findandUpdate( { _id: characterID }, {  $push: { inventory: itemFromDB, amount: dropAmount } } )
    console.log("Update, new Stack:", char.inventory)
  }
};

export const updateInventoryByLoot = async (req, res, next) => {
    try{
        // characterID. name, amount, 
        const itemName = req.body.itemName
        const amount = req.body.amount
        const characterID = req.body.characterID

        // Find character by ID
        const characterFromDB = await CharDataModel.findOne({ _id: characterID })
        console.log("CharInventoryFromDB", characterFromDB.inventory)
        
        const itemFromCharacter = characterFromDB.inventory.find(item => item.itemName === itemName)
        itemFromCharacter && console.log("ItemFromCharacter: ", itemFromCharacter.name)
        
        // Find Item by Name
        const itemFromDB = await ItemModel.findOne({name: itemName})
        console.log("ItemFromDB: ", itemFromDB)

        itemFromCharacter && itemFromDB.stacksize > 1
          ? await stackItem(characterFromDB, itemFromCharacter, amount)
          : await addItem(characterID, itemFromDB, amount)

    }catch(err){
        next(err)
    }
}