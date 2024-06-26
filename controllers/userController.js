import bcrypt from 'bcrypt'
import { UserDataModel } from '../models/userSchema.js'

export const signinController = async (req, res) => {
    try {
        const signinData = req.body
        const userData = await UserDataModel.findOne({ username: req.body.username }).populate('characters')
        console.log("tryToSignIn", signinData)

        if (bcrypt.compareSync(signinData.password, userData.password)) {
            console.log("comparedPassword")
            const userDataObj = userData.toObject()
            delete userDataObj.password
            console.log("userDataObj From DB", userDataObj)
            // console.log("isBanned?", userDataObj.isBanned)
            if (userDataObj.isBanned) {
                res.send({ isBanned: true, title: "Banned by Admin", msg: "Youre Account was banned please connect the Support to resolve the conflics." })
            } else {
                // generate token
                // userDataObj.token = "token1234"
                userDataObj.isLogedIn = true
                res.send({ token: "token1234", userData: userDataObj })
                console.log("userDataObj sent!")
            }
        }
        else {
            res.send("Email or password is wrong!")
        }
    } catch (error) {
        console.log(error)
        res.status(401).send("ERROR: " + error.message);
    }
}

export const registerController = async (req, res) => {
    const saltRounds = 12
    try {
        const hashedRegisterPassword = await bcrypt.hash(req.body.password, saltRounds)

        const dataOfUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashedRegisterPassword,
            language: "",
            characters: [],
            isOnline: false,
            isBanned: false,
        }

        //SAVE: userData to userDB
        await new UserDataModel(dataOfUser).save()
        res.send({ msg: 'Successfull registrated!' })

    } catch (error) {
        res.status(401).send("ERROR: " + error.message)
    }
};


// Player, Char, Inventory, Skills

// const playerAccount = {
//     _id: ObjectId("1234"),
//     username: "player123",
//     email: "player123@example.com",
//     password: "password123",
//     language: "English",
//     characters: ["s1d2f3g4"],
//   };

// const characters = {
//     _id: "s1d2f3g4",
//     player: ObjectId("1234"),
//     charName: "Warrior",
//     class: "Warrior",
//     level: 1,
//     experience: 0,
//     skills: ["Slash", "Block"],
//     skillpoints: 0,
//     inventory: ["inv134"],
// }

// const inventorys = {
//     _id: "inv134",
//     character: ObjectId("1234"),
//     items: ["i134", "i135", "i136"],
// }

// const items = [
// {
//     _id: "i134",
//     name: "Sword",
//     type: "Weapon",
//     damage: 10,
//     weight: 5,
// },
// {
//     _id: "i135",
//     name: "Shield",
//     type: "Armor",
//     damage: 0,
//     weight: 10,
// },
// {
//     _id: "i136",
//     name: "Potion",
//     type: "Consumable",
//     damage: 0,
//     weight: 1,
// }
// ]