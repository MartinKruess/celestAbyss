import { CharDataModel } from "../models/characterSchema.js"
import { InventoryModel } from "../models/inventorySchema.js";
import { ItemModel } from "../models/itemSchema.js"

// New Item to Inventory
const addItem = async (characterID, itemFromDB, amount) => {
  await CharDataModel.findandUpdate( { _id: characterID }, {  $push: { inventory: itemFromDB, amount: amount } } )
}

// Stack Item to Inventory
const stackItem = async (invFromDB, itemFromDB, dropAmount) => {
  let itemAmount = dropAmount
  
  // Load all current stacks of the item
  const itemStacks = invFromDB.items.filter(item => item.itemID[0] === itemFromDB._id[0])

  // Fill up existing stacks
  itemStacks.forEach(stack => {
    const spaceLeft = itemFromDB.stacksize - stack.amount
    console.log(spaceLeft)
 
    if(spaceLeft > 0){
      if(itemAmount <= spaceLeft) {
        stack.amount += itemAmount
        itemAmount = 0
      } else {
        stack.amount = itemFromDB.stacksize
        itemAmount -= spaceLeft
      }  
    }
  })
  console.log("Stacks: ", itemStacks)
  console.log("DropAmount after loop:", itemAmount)

  // Create new stacks
  if(itemAmount > 0){
    do {
      if(itemAmount > itemFromDB.stacksize){
        invFromDB.items.push({ itemID: itemFromDB._id, amount: itemFromDB.stacksize })
        itemAmount -= itemFromDB.stacksize
      } else {
        invFromDB.items.push({ itemID: itemFromDB._id, amount: itemAmount })
        itemAmount = 0
      }
    } while (itemAmount > 0 && invFromDB.items.length < invFromDB.size);

    // save to DB
    console.log("Update, new Stack:", invFromDB.items.length)
  }
};

export const updateInventoryByLoot = async (req, res, next) => {
    try{
        // characterID. name, amount, 
        const itemName = req.body.itemName
        const amount = req.body.amount
        const characterID = req.body.characterID

        // Find inventory by characterID
        const inventoryFromDB = await InventoryModel.findOne({characterID: characterID })

        // Find Item by Name in itemDB
        const itemFromDB = await ItemModel.findOne({name: itemName})

        // Item already in Inventory?
        const itemInInventory = inventoryFromDB.items.find(item => item.itemID[0] === itemFromDB._id[0])

        inventoryFromDB.items.length + 158 < inventoryFromDB.size ? (
          itemInInventory && itemFromDB.stacksize > 1
          ? await stackItem(inventoryFromDB, itemFromDB, amount)
          : await addItem(inventoryFromDB, itemFromDB, amount)
        ) : console.log("Inventory is full")
    } catch (err){

        next(err)
    }
}