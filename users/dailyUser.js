let mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://justinwu:990820wu@stayfit-5whpu.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false},
)
const dailySchema = new mongoose.Schema({
    userID:String,
    grams: Number,
    gramsConsumed: Number,
    carbonhydrates: Number,
    proteins: Number,
    fats: Number,
    food: String,
    calories: Number
});
const Daily = mongoose.model("Daily", dailySchema);
module.exports = Daily;
