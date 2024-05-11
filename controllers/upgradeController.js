import { CharDataModel } from "../models/characterSchema";

export const upgradeController = async (req, res) => {
    try {
        const upgradeData = req.body;

        let chance = 0;	
        if (upgradeData.category === "skill") {
            chance = (Math.random() + upgradeChanceSkill[upgradeData.upgrade]).toFixed(2);

            if (chance > 1) {
                upgradeData.upgrade++;
                await CharDataModel.findOneAndUpdate({ _id: upgradeData.charID, "skillUpdates.skillId": upgradeData.skillID}, { $set: { "skillUpdates.$.upgrade": upgradeData.upgrade } });
                res.send({status: "success", msg: "Upgrade successfull!"})
            } else {
                res.send({status: "fail", msg: "Upgrade failed!"})
            }
        }
        
        if(category === "weapon" || category === "armor" || category === "jewelry") {
            // chance = 0-1 + 1-0.05 - 1/100*3 (0.03) or 6/100+3 (0.18)
            chance = (Math.random() + upgradeChanceEQ[upgradeData.upgrade] - upgradeData.rang/100*3).toFixed(3);

            if (chance > 1) {
                upgradeData.upgrade++;
                await CharDataModel.findOneAndUpdate({ _id: upgradeData.charID, "skillUpdates.skillId": upgradeData.skillID}, { $set: { "skillUpdates.$.upgrade": upgradeData.upgrade } });
                res.send({status: "success", msg: "Upgrade successfull!"})
            } else {
                res.send({status: "fail", msg: "Upgrade failed!"})
            }
        }
        
    } catch (error) {
        res.send({status: "try again", msg: "Fehler beim Update Versuch!"});
    }
}

const upgradeDataOBJ = {
    rang: "6", // FEHLT!!!
    category: "weapon",
    upgrade: 3,
    level: 1,
    maxUpgrade: 10,
    upgradeItem: "s1d2f3g4",
}

const upgradeEQ = {
    0: 1.3,
    1: 1.3,
    2: 1.3,
    3: 0.61,
    4: 0.41,
    5: 0.31,
    6: 0.26,
    7: 0.24,
    8: 0.22,
    9: 0.219,
}

const upgradeChanceSkill = {
    0: 1,
    1: 0.5,
    2: 0.4,
    3: 0.35,
    4: 0.3,
    5: 0.25,
    6: 0.2,
    7: 0.15,
    8: 0.08,
    9: 0.05,
}