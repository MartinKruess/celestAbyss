import { skills } from "../scripts/skilldata.js";
import { SkillDataModel } from "../models/skillSchema.js";

export const skillController = async (req, res) => {
    try {
        for (let i = 0; i < skills.length; i++) {
            const skillCheck = await SkillDataModel.findOne({ skillname: skills[i].S_Name })

            // Query: {$and: [{"charClass": "Knife", "category": "passive"}]}

            if (!skillCheck) {
                const arr = Array.isArray(skills[i].CharClass) ? [...skills[i].CharClass] : skills[i].CharClass.split(", ")
                let category = ""
                if (skills[i].category === "creature") {
                    category = "creature"
                } else if (skills[i].category === "Aurora") {
                    category = "Aurora"
                } else if (skills[i].category === "Human") {
                    category = "Human"
                } else if (skills[i].category === "Umbra") {
                    category = "Umbra"
                } else if (skills[i].S_DMG_Type === "Passive" && !skills[i].category) {
                    category = "passive"
                } else {
                    category = "active"
                }

                const newSkill = {
                    nr: i + 1,
                    skillName: skills[i].S_Name,
                    charClass: arr,
                    maxSkillLv: skills[i].S_Max_Lv,
                    category: category,
                }
                console.log("skillname:", newSkill.skillName)
                await SkillDataModel(newSkill).save();
            }
        }
        res.send("skills added!")

    } catch (error) {
        res.send("ERROR:", error)
    }
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