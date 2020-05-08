let mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://justinwu:990820wu@stayfit-5whpu.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
)
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    currentWeight:Number,
    goalWeight:Number,
    goalCalorie:Number,
    progressWeight:Number,
    protein: Number,
    carbonhydrates:Number,
    fats:Number
});
const User = mongoose.model("User", userSchema);
module.exports = User;
