import { skills } from "../scripts/skilldata.js";
import { SkillDataModel } from "../models/skillSchema.js";


export const skillController = async (req, res) => {
    try {
        for (let i = 0; i < skills.length; i++) {
            const skillCheck = await SkillDataModel.findOne({ skillName_de: skills[i].S_Name_de })

            // Query: {$and: [{"charClass": "Knife", "charClass": "Templar", "category": "passive"}]}


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

                } else if (skills[i].S_DMG_Type === "passive" && !skills[i].category) {
                    category = "passive"

                } else {
                    category = "active"
                }

                const newSkill = {
                    nr: i + 1,
                    skillName_eng: skills[i].S_Name_eng,
                    skillName_de: skills[i].S_Name_de,
                    charClass: arr,
                    maxSkillLv: skills[i].S_Max_Lv,
                    category: category,
                    description_eng: skills[i].S_Description_eng,
                    description_de: skills[i].S_Description_de,
                    dmgType: skills[i].S_DMG_Type,
                    patk: skills[i].S_PAttack,
                    matk: skills[i].S_MAttack,
                    cd: skills[i].S_CD,
                    dur: skills[i].S_Duration,
                    mana: skills[i].S_Mana,
                    health: skills[i].S_Health,
                    agi: skills[i].S_Agi,
                    amb: skills[i].S_Amb,
                    block: skills[i].S_Block,
                    dex: skills[i].S_Dex,
                    faith: skills[i].S_Faith,
                    int: skills[i].S_Int,
                    luck: skills[i].S_Luck,
                    str: skills[i].S_Str,
                    vic: skills[i].S_Vic,
                    vita: skills[i].S_Vita,
                    wis: skills[i].S_Wis,
                    pdef: skills[i].S_PDefense,
                    mdef: skills[i].S_MDefense,
                    atkSpeed: skills[i].S_ATK_Speed,
                    movementSpeed: skills[i].S_MovementSpeed
                }
                console.log("skillname:", newSkill.skillName_de)
                await SkillDataModel(newSkill).save();
            }
        }
        res.send("skills added!")

    } catch (error) {
        res.send("Skilldata unvorständig!")
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