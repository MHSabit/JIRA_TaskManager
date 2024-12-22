const UserModel = require("../Schema/userSchema");
const bcrypt = require('bcrypt');

const signUpController = {};

signUpController.SignUp = async (req, res) => {
    try{

        const existingUser = await UserModel.findOne({email: req.body.email});
        if(existingUser){
            return res.status(400).json({
                message: 'Email ID already associated with a user'
            });
        }

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        console.log(user);
        const createUser = await UserModel.create(user);
        res.send(createUser);
    }
    catch(error){
        console.log(error);
    }
}


module.exports = signUpController;