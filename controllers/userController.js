import bcrypt from 'bcrypt'
import { UserDataModel } from '../models/userSchema.js'

export const signinController = async (req, res) => {
    try{
        console.log("gameRequest:", req.body)
        const signinData = req.body
        const userData = UserDataModel.findOne({mail: req.body.mail})|| "test"
        if(bcrypt.compareSync(signinData.password, userData.password)){
            
            // generate token
            res.send(userData)
        }
        else{
            res.send("Email or password is wrong!")
        }
    } catch(error){
        res.status(401).send("ERROR: " + error.message);
    }
}

export const registerController = async (req, res) => {
	try {
		const hashedRegisterPassword = await bcrypt.hash(req.body.password, saltRounds)

		const dataOfUser = {
			mail: req.body.email,
			password: hashedRegisterPassword,
            language: "",
            characters: [],
            status: "",
		}

		//SAVE: userData to userDB
        new UserDataModel(dataOfUser).save()
		res.send('Successfull registrated!')

	} catch (error) {
		console.log("ERROR:", error, "Error by registration!")
	}
};