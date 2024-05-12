import { CharDataModel } from "../models/characterSchema"

export const updateInventoryByLoot = async (req, res, next) => {
    try{
        // characterID. name, amount, 
        const itemName = req.body.itemName
        const amount = req.body.amount
        const characterID = req.body.characterID

        // Find character by ID
        const characterFromDB = await CharDataModel.findOne({ _id: characterID })

        const itemFromCharacter = character.inventory.find(item => item.name === itemName)

        // Find Item by Name
        const itemFromDB = await ItemModel.findOne({name: itemName})

        itemFromCharacter && itemFromCharacter.stacksize > 1 ? await stackItem(characterFromDB, itemFromDB, amount) : await addItem(characterID, itemFromDB, amount)

        

        // New Item to Stack


        
    }catch(err){
        next(err)
    }

    const stackItem = async (characterFromDB, itemFromDB, newAmount) => {
        distributeNuts(3, "Wallnüsse");
        // if(itemFromDB.stacksize - characterFromDB.inventory.amount >= newAmount){
        //     const updatedAmount = characterFromDB.inventory.amount + newAmount
        //     await CharDataModel.findandUpdate( { _id: characterID }, {  $push: { inventory: itemFromDB, amount: updatedAmount } } )
        // }
        
        
    }

    // New Item to Inventory
    const addItem = async (characterID, itemFromDB, amount) => {
        await CharDataModel.findandUpdate( { _id: characterID }, {  $push: { inventory: itemFromDB, amount: amount } } )
    }
}



const distributeNuts = async (quantity, nutType) => {
    try {
      // Annahme: Du hast eine MongoDB-Verbindung und eine Inventory-Sammlung
      const nutItems = [{name: "Wallnüsse", quantity: 8, stacksize: 10}, {name: "Wallnüsse", quantity: 9, stacksize: 10}, {name: "Wallnüsse", quantity: 10, stacksize: 10}]
  
      let remainingQuantity = quantity;
  
      // Verteile die Nüsse auf vorhandene Stapel, beginnend mit den kleinsten Mengen
      for (const nutItem of nutItems) {
        const availableSpace = nutItem.stacksize - nutItem.quantity;
  
        if (remainingQuantity <= availableSpace) {
          // Es gibt genug Platz auf dem aktuellen Stapel, fülle ihn auf und beende die Schleife
          await Inventory.findByIdAndUpdate(nutItem._id, { $inc: { quantity: remainingQuantity } });
          remainingQuantity = 0;
          break;
        } else {
          // Fülle den aktuellen Stapel auf und aktualisiere die verbleibende Menge
          await Inventory.findByIdAndUpdate(nutItem._id, { $set: { quantity: 10 } });
          remainingQuantity -= availableSpace;
        }
      }
  
      // Wenn noch eine Menge übrig ist, erstelle einen neuen Stapel
      if (remainingQuantity > 0) {
        const newNutItem = await Inventory.create({
          itemName: nutType,
          quantity: remainingQuantity > 10 ? 10 : remainingQuantity // Begrenze die Menge auf 10, falls die verbleibende Menge größer als 10 ist
        });
        console.log(`Ein neuer Stapel ${nutType} wurde erstellt:`, newNutItem);
      }
  
      console.log(`Die Nüsse wurden erfolgreich verteilt.`);
    } catch (error) {
      console.error("Fehler beim Verteilen der Nüsse:", error);
    }
  }