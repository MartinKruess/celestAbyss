import { skills } from "../scripts/skilldata.js";
import { SkillDataModel } from "../models/skillSchema.js";

export const skillController = async (req, res) => {
    // try {
        // console.log("body", req.body)
        for (let i = 0; i < skills.length; i++) {
            let skillName = ""
            skillName = await SkillDataModel.findOne({username: skills[i].S_Name})
            console.log("Name of skill", skills[i].S_Name)
            console.log("SkillName:", skillName)
            if(!skillName){
                await SkillDataModel(skills[i]).save();
            }
        }
        // res.send("gesendet")
    // } catch (error) {
    //     res.send("ERROR:", error)
    // }
}