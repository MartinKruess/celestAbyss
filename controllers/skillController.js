import { skills } from "../scripts/skilldata.js";
import { SkillDataModel } from "../models/skillSchema.js";

export const skillController = async (req, res) => {
    // try {
        for (let i = 0; i < skills.length; i++) {
            const skillCheck = await SkillDataModel.findOne({skillname: skills[i].S_Name})
            
            if(!skillCheck){
                const arr = skills[i].CharClass.split(", ")
                console.log(arr)
                const newSkill = {
                    skillName: skills[i].S_Name,
                    charClass: arr,
                    maxSkillLv: skills[i].S_Max_Lv
                }
                console.log("skillname:", newSkill.skillName)
                await SkillDataModel(newSkill).save();
            }
        }
        res.send("alles, OK")
        // res.send("gesendet")
    // } catch (error) {
    //     res.send("ERROR:", error)
    // }
}

// export const updateSkill = async (req, res) => {
//     try {
//         const skill = await SkillDataModel.findOne({charClass: ""})
//         if(skill){
//             skill.charClass = req.body.charClass
//             await skill.save()
//             res.send("Skill updated")
//         } else {
//             res.send("Skill not found")
//         }
//     }
// }