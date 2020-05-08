const User = require('./user');
const express = require('express');
const { check, validationResult } = require('express-validator');
const signupTemplate = require('../views/auth/signup');
const signinTemplate = require('../views/auth/signin');
const formTemplate = require('../views/auth/form');
const util = require('util');
const crypto = require('crypto');
const scrypt = util.promisify(crypto.scrypt);
const { requireUsername,
    requirePassword,
    requirePasswordConfirmation,
    requireValidPassword,
    requireValidUsername,
    requireValidGoalWeight,
    requireValidGoalCalorie,
    requireValidCurrentWeight } = require('./validator');

// Subrouter
const router = express.Router();

// Sign up Page
router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});

router.post('/signup', [
    requireUsername,
    requirePassword,
    requirePasswordConfirmation
], async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.send(signupTemplate({ req, errors }));
    }
    // Retrieve the data from the form
    const { username, password, passwordConfirmation } = req.body;
    const salt = crypto.randomBytes(8).toString('hex');
    const hash = await scrypt(password, salt, 64);
    // Create a User into the database
    let user = new User({
        username,
        password: `${hash.toString('hex')}.${salt}`
    });
    user.save((err, user) => {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    });
    req.session.userID = user._id;
    // Store the id to  the Cookie
    res.redirect('/form');
});

// Sign in Page
router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});
router.post('/signin', [
    requireValidPassword,
    requireValidUsername
], async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.send(signinTemplate({ errors }))
    }
    const { username, password } = req.body;
    const user = await User.find({ username }, (err, result) => {
        err ? console.log(err) : console.log(result);
    })
    // Set Cookies and redirect 
    req.session.userID = user[0]._id;
    res.redirect('/user');
})
// Sign out Operation
router.get('/signout', (req, res) => {
    // Forget the cookie
    req.session = null;
    res.redirect('/');
})

// Form page
router.get('/form', (req, res) => {
    res.send(formTemplate({}));
})

router.post('/form', [requireValidGoalWeight, requireValidCurrentWeight, requireValidGoalCalorie], async (req, res) => {
    // Receive the data from the form
    const { currentWeight, goalWeight, goalCalorie } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.send(formTemplate({ errors }));
    }
    // Find this user in the Database and update it's profile
    const user = await User.findById(req.session.userID, (err, result) => {
        err ? console.log(err) : console.log(result);
    })
    user.goalCalorie = goalCalorie;
    user.goalWeight = goalWeight;
    user.currentWeight = currentWeight;
    await user.save();
    res.redirect('/user')

    // Redirect him to his calorie page
})
module.exports = router;