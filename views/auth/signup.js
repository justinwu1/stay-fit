const authLayout = require('./authlayout');

const { getError } = require('../helper');
module.exports = ({ req, errors }) => {
    return authLayout({
        content: `  
    <main>

        <div class="container">
            <div class = "section1">
            <form method = "POST">
                <h3>Sign up Stayfit</h3>
                <hr></hr>
                <div id = "form">
                    <div class="form-group">
                        <label><strong>Email</strong></label>
                        <input name = "username" type="text" class="form-control border-dark" required>
                        <p style = "color:red">${getError(errors, 'username')}</p>
                    </div>

                        <div class="form-group">
                            <label><strong>Password</strong></label>
                            <input type="password" class="form-control border-dark" name = "password"placeholder="5 ~ 20 Chracters"required>
                            <p style = "color:red">${getError(errors, 'password')}</p>
                        </div>
                        <div class="form-group ">
                            <label for="inputPassword4"><strong>Password Confirmation</strong></label>
                            <input type="password" class="form-control border-dark" name = "passwordConfirmation" required>
                            <p style = "color:red">${getError(errors, 'passwordConfirmation')}</p>
                        </div>
                        <p class = "float-right">Already a member? <a href = /signin>Sign in</a></p>

                </div>
            <button type = "submit" class = "btn btn-outline-success btn-lg float-right">Sign up</button>
            </form>
            </div>
        </div>
    </main>
    `})

}
