let mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://justinwu:990820wu@stayfit-5whpu.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false},
)
const analysisSchema = new mongoose.Schema({
    userID:String,
    date:String,
    caloriesOfTheDay:Number
});
const Analysis = mongoose.model("Analysis", analysisSchema);
module.exports = Analysis;
