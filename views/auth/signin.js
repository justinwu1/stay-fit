const authLayout = require('./authlayout');
const { getError } = require('../helper'); 
module.exports = ({errors}) => {    
    return authLayout({
        content: `
        <main>
        <div class="container">
            <div class = "section1">
            <form method = "POST">
                <h3>Sign in to Stayfit</h3>
                <hr></hr>
                <div id = "form">
                    <div class="form-group">
                        <label><strong>Email Address</strong></label>
                        <input name = "username" type="text" class="form-control border-dark" required>
                        <p style = "color:red">${getError(errors,'username')}</p>
                    </div>
                        <div class="form-group">
                            <label><strong>Password</strong></label>
                            <input type="password" class="form-control border-dark" name = "password"required>
                            <p style = "color:red">${getError(errors,'password')}</p>
                        </div>
                </div>
            <p><a href = "/signup"> Not a member? Sign up now! </a></p>
            <button type = "submit" class = "btn btn-outline-success btn-lg float-right">Sign in</button>
            </form>
        </div>
        </div>
    </main>
`}) 
        ;

}