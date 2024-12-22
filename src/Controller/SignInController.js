const UserModel = require("../Schema/userSchema");
const bcrypt = require('bcrypt');
const Token = require('./UtilityFunctions/Token');

const SignInUtility = {};

SignInUtility.signIn = async (req, res) => {
    try{
        const user = await UserModel.findOne({email: req.body.email});
        if(!user){
            return res.status(400).json({
                message: 'Email ID not associated with a user'
            });
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch){
            return res.status(400).json({
                message: 'Password does not match'
            });
        }
        const accessToken = await Token.generateAccressToken(user);
        const refreshToken = await Token.generateRefreshToken(user);
        res.status(200).json({
            message: 'Login successful',
            AccessToken: accessToken,
            RefreshToken: refreshToken
        });
    }
    catch(error){
        console.log(error);
    }
},

SignInUtility.generateAccessToken = async (req, res) => {
    
}

module.exports = SignInUtility;