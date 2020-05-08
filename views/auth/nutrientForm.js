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
                        <label><strong>Carbonhydrates</strong></label>
                        <input name = "carbonhydrates" type="text" class="form-control border-dark " placeholder = "%" required>
                        <p style = "color:red">${getError(errors,'currentWeight')}</p>
                    </div>
                    <div class = "form-group">
                        <label><strong>Protein</strong></label>
                        <input name = "protein" type="text" class="form-control border-dark" placeholder = "%" required>
                        <p style = "color:red">${getError(errors,'goalWeight')}</p>
                    </div>
                    <div class = "form-group">
                        <label><strong>Fats</strong></label>
                        <input name = "fats" type="text" class="form-control border-dark" placeholder = "%" required>
                        <p style = "color:red">${getError(errors,'goalCalorie')}</p>
                    </div>
               </div>
               <button type = "submit" class = "btn btn-outline-success btn-lg">Proceed</button>

           </form>
           </div>
        </div>
    `
    })
}