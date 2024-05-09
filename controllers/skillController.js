import { skills } from "../scripts/skilldata.js";
import { SkillDataModel } from "../models/skillSchema.js";

export const skillController = async (req, res) => {
    // try {
        for (let i = 0; i < skills.length; i++) {
            const skillCheck = await SkillDataModel.findOne({skillname: skills[i].S_Name})
            if(!skillCheck){
                const newSkill = {
                    skillName: skills[i].S_Name,
                    charClass: skills[i].CharClass,
                    maxSkillLv: skills[i].S_Max_Lv
                }
                console.log("skillname:", newSkill.skillName)
                await SkillDataModel(newSkill).save();
            }
        }
        res.send("OK")
        // res.send("gesendet")
    // } catch (error) {
    //     res.send("ERROR:", error)
    // }
}