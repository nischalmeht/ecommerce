// // module.exports={
//     hello(){
//         return {
//             text:"Hello world!",
//             views:1234
//         }
//     }
// }
const User = require('../models/user-model');
const validator = require('validator');

module.exports={

    createUser: async function({ userInput }, req) {
        const errors = [];
        if(validator.isEmpty(userInput.name)) {
            errors.push('Name is required');
        }
        if(validator.isEmpty(userInput.email) || !validator.isEmail(userInput.email)) {
            errors.push('Invalid Email');
        }
        if(validator.isEmpty(userInput.password) || !validator.isLength(userInput.password, { min: 8 })) {
            errors.push('Password should be atleast 8 characters long');
        }
        if(errors.length > 0) {
            const error = new Error('Validation failed');
            error.data = errors;
            error.statusCode = 422;
            throw error;
        }

        const existingUser = await User.findOne({ email: userInput.email });
        if(existingUser) {
            const error = new Error('A user with this email already exists, please try a different email');
            error.statusCode = 401;
            throw error;
        }

        const user = new User({
            name: userInput.name,
            email: userInput.email,
            password: userInput.password
        });
        const createdUser = await user.save();

        return {
            ...createdUser._doc,
            _id: createdUser._doc._id.toString()
        };
    }
}