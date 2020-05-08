const { check } = require('express-validator');
const User = require('./user');
const { comparePasswords } = require('../views/helper');
module.exports = {
    requireUsername:
        check('username')
            .trim()
            .normalizeEmail()
            .isEmail()
            .withMessage("Must be a a valid email")
            .custom(async (username) => {
                let registered = false;
                const existedUser = await User.find({ username: username }, function (err, result) {
                    registered = true ? result.length > 0 : console.log(err);
                });
                // Validation of Existed username /  Password
                if (registered) {
                    throw new Error("Username in use");
                }
            }),
    requirePassword: check('password')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage("Password must between 5 ~ 20 characters"),
    requirePasswordConfirmation: check('passwordConfirmation')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage('Must be between 4 and 20 characters')
        .custom((passwordConfirmation, { req }) => {
            
            if (passwordConfirmation !== req.body.password) {
                throw new Error('Passwords must match');
            }else{
                return true;
            }
        }),
    requireValidPassword: check('password')
        .trim()
        .custom(async (password, { req }) => {
            const user = await User.find({ username: req.body.username }, (err, result) => {
                err ? console.log(err) : console.log(result);
            });
            if (user === undefined || user.length === 0) {
                throw new Error("Invalid password");
            }
            const validPassword = await comparePasswords(user[0].password, password);
            if (!validPassword) {
                throw new Error('Invalid Password');
            }
        }),
    requireValidUsername: check('username')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid username')
        .custom(async (username) => {
            let userFlag = false;
            const user = await User.find({ username }, (err, result) => {
                userFlag = true ? result.length === 1 : console.log(err);
            });
            if (!userFlag) {
                throw new Error('Username not found')
            }
        }),
    requireValidGoalWeight: check('goalWeight')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number"),
    requireValidCurrentWeight: check('goalCalorie')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number"),
    requireValidGoalCalorie: check('currentWeight')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number"),
    requireValidCarbonhydrates: check('carbonhydrates')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number"),
    requireValidProtein: check('protein')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number"),
    requireValidFats: check('fats')
    .trim()
    .isNumeric()
    .withMessage("Invalid Number")
    
};
