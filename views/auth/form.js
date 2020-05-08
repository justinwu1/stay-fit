const authLayout = require('./authlayout');
const { getError } = require('../helper'); 
module.exports = ({ req, errors }) => {
    return authLayout({ content:
    `
    
    <div class="container">
        <div class = "section1">
           <form method = "POST">
               <h3 class = "display-3">Profile</h3>
               <hr></hr>
               <div id = "form">
                    <div class = "form-group">
                        <label><strong>Initial Weight</strong></label>
                        <input name = "currentWeight" type="text" class="form-control border-dark " placeholder = "lbs" required>
                        <p style = "color:red">${getError(errors,'currentWeight')}</p>
                    </div>
                    <div class = "form-group">
                        <label><strong>Goal Weight</strong></label>
                        <input name = "goalWeight" type="text" class="form-control border-dark" placeholder = "lbs" required>
                        <p style = "color:red">${getError(errors,'goalWeight')}</p>
                    </div>
                    <div class = "form-group">
                        <label><strong>Goal Calorie</strong></label>
                        <input name = "goalCalorie" type="text" class="form-control border-dark" required>
                        <p style = "color:red">${getError(errors,'goalCalorie')}</p>
                    </div>
                    
                <p class = "lead"><a target="_blank" href = "https://tdeecalculator.net/">No idea? Check out here</a></p>
                <p class = "lead"><a target="_blank" href = "https://www.google.com/search?q=weight+conversion&oq=weight+conversion&aqs=chrome..69i57j0l7.3464j0j4&sourceid=chrome&ie=UTF-8">Need Weight Conversion?</a></p>
               </div>
               <button type = "submit" class = "btn btn-outline-success btn-lg">Proceed</button>
           </form>
           </div>
        </div>
    `
    })
}