import { skills } from "./skilldata.js";

console.clear()

const unfinishedSkills = []
const charClassError = []
let archerSkills = []
let soulseekerSkills = []
let templarSkills = []
let gladiSkills = []
let butcherSkills = []
let villianSkills = []
let healerSkills = []
let lightmageSkills = []
let bloodmageSkills = []
let witcherSkills = []
let druideSkills = []
let shamaneSkills = []


for (let i = 0; i < skills.length; i++) {
    if (!skills[i].S_Name_de || !skills[i].S_Name_eng || !skills[i].S_Description_de || !skills[i].S_Description_eng) {
        unfinishedSkills.push(skills[i].S_Name_de)
    }
    // if (skills[i].CharClass.length < 2) {
    //     charClassError.push(skills[i].S_Name_de)
    // }

    skills[i].CharClass.includes("Archer") && archerSkills.push(skills[i])
    skills[i].CharClass.includes("Soulseeker") && soulseekerSkills.push(skills[i])
    skills[i].CharClass.includes("Templar") && templarSkills.push(skills[i])
    skills[i].CharClass.includes("Gladi") && gladiSkills.push(skills[i])
    skills[i].CharClass.includes("Butcher") && butcherSkills.push(skills[i])
    skills[i].CharClass.includes("Villian") && villianSkills.push(skills[i])
    skills[i].CharClass.includes("Healer") && healerSkills.push(skills[i])
    skills[i].CharClass.includes("Lightmage") && lightmageSkills.push(skills[i])
    skills[i].CharClass.includes("Bloodmage") && bloodmageSkills.push(skills[i])
    skills[i].CharClass.includes("Witcher") && witcherSkills.push(skills[i])
    skills[i].CharClass.includes("Druid") && druideSkills.push(skills[i])
    skills[i].CharClass.includes("Shamane") && shamaneSkills.push(skills[i])
}



console.log("Archer :", 42 - archerSkills.length, "Skills fehlen")
console.log("Soulseeker :", 42 - soulseekerSkills.length, "Skills fehlen")
console.log("Templar:", 42 - templarSkills.length, "Skills fehlen")
console.log("Gladi :", 42 - gladiSkills.length, "Skills fehlen")
console.log("Butcher :", 42 - butcherSkills.length, "Skills fehlen")
console.log("Villian :", 42 - villianSkills.length, "Skills fehlen")
console.log("Healer :", 42 - healerSkills.length, "Skills fehlen")
console.log("Lightmage :", 42 - lightmageSkills.length, "Skills fehlen")
console.log("Bloodmage :", 42 - bloodmageSkills.length, "Skills fehlen")
console.log("Witcher :", 42 - witcherSkills.length, "Skills fehlen")
console.log("Druid :", 42 - druideSkills.length, "Skills fehlen")
console.log("Shamane :", 42 - shamaneSkills.length, "Skills fehlen")

console.log("-----------------------------")

// console.log("Unvollständig:")
// console.table(unfinishedSkills)
// console.log("charClass to short:", charClassError)

// console.log("Archer Skills:", archerSkills[8].S_Name_de)


// const sortedAcrcherSkills = archerSkills.sort((a, b) => a.S_PAttack - b.S_PAttack)

// console.log("Archer Skills:", sortedAcrcherSkills[8].S_Name_de)