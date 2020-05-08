const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./users/auth');
const userRouter = require('./routes/userRoutes');
const homePageTemplate = require('./views/homePage');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['1asdskdamslamc']
}));
app.use(authRouter);
app.use(userRouter);

app.get('/',(req,res)=>{
    res.send(homePageTemplate());
})
app.listen(3000, () => {
    console.log('Listening');
});
