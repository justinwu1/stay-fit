const express = require('express');
const userPage = require('../views/userPage/userPage');
const User = require('../users/user');
const Daily = require('../users/dailyUser');
const Analysis = require('../users/analysis');
const analysisTemplate = require('../views/userPage/analysisPage');
const nutrientForm = require('../views/auth/nutrientForm');
const dailyPageTemplate = require('../views/userPage/dailyPage');
const editTemplate = require('../views/userPage/editTemplate');
const { check, validationResult } = require('express-validator');
const { requireValidCarbonhydrates, requireValidFats, requireValidProtein } = require('../users/validator');
const router = express.Router();

router.get('/user', async (req, res) => {
    const userInfo = await User.findById(req.session.userID, (err, result) => {
        if (err) console.log(err);
    });
    res.send(userPage({ userInfo }));
});
router.post('/user', async (req, res) => {
    const user = await User.findById(req.session.userID);
    const { progressWeight } = req.body;
    user.progressWeight = progressWeight;
    await user.save();

    res.redirect('/user');
});
router.get('/nutrient-edit', (req, res) => {
    res.send(nutrientForm({ req }));
});

router.post('/nutrient-edit', [requireValidCarbonhydrates, requireValidFats, requireValidProtein], async (req, res) => {
    // Receive the data from the form
    const { carbonhydrates, fats, protein } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.send(formTemplate({ errors }));
    }
    // Find this user in the Database and update it's profile
    const user = await User.findById(req.session.userID, (err, result) => {
        if (err) console.log(err);
    });
    user.carbonhydrates = carbonhydrates;
    user.protein = protein;
    user.fats = fats;
    await user.save();
    res.redirect('/user');
});

router.get('/daily-calorie', async (req, res) => {
    const dailyInfo = await Daily.find({ userID: req.session.userID });
    const user = await User.findById({ _id: req.session.userID });
    res.send(dailyPageTemplate({ dailyInfo }, { user }));
});
router.post('/daily-calorie', async (req, res) => {
    const { gramsConsumed, carbonhydrates, fats, proteins, calories, food, grams } = req.body;
    let daily = new Daily({
        userID: req.session.userID,
        gramsConsumed,
        grams,
        proteins,
        calories,
        food,
        carbonhydrates,
        fats
    });
    await daily.save();
    res.redirect('/daily-calorie');
});

router.get('/dailyInfo/:id/edit', async (req, res) => {
    const dailyInfo = await Daily.findById({ _id: req.params.id });
    if (dailyInfo.length === 0 || dailyInfo === undefined) {
        res.send("Product not found");
    }
    res.send(editTemplate({ dailyInfo }));
});
router.post('/dailyInfo/:id/edit', async (req, res) => {
    const changes = req.body;
    try {
        await Daily.findByIdAndUpdate(req.params.id, changes);
    } catch (err) {
        console.log(err);
        res.send("Didnt find the item");
    }
    res.redirect('/daily-calorie');
});

router.post('/dailyInfo/:id/delete', async (req, res) => {
    await Daily.findByIdAndDelete(req.params.id);
    res.redirect('/daily-calorie');
});

router.post('/daily-calorie/deleteAll', async (req, res) => {
    await Daily.deleteMany({ userID: req.session.userID });
    res.redirect('/daily-calorie');
});
router.get('/analysis', async (req, res) => {
    // Get the user goal calorie
    const user = await User.findById({ _id: req.session.userID });
    const analysisInfo = await Analysis.find({ userID: req.session.userID });
    console.log(user);
    res.send(analysisTemplate({ analysisInfo }, { user }));
})
router.post('/analysis', async (req, res) => {
    let date = new Date();
    const { caloriesOfTheDay } = req.body;
    let analysis = new Analysis({
        userID: req.session.userID,
        caloriesOfTheDay,
        date: date.toString()
    });
    await analysis.save();
    console.log(analysis.date);
    res.redirect('/analysis');
});
router.post('/analysis/deleteAll', async (req, res) => {
    await Analysis.deleteMany({userID:req.session.userID});
    res.redirect('/analysis');
});
module.exports = router;