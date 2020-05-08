const userLayout = require('../userPage/userLayout');

module.exports = ({dailyInfo}) => {
    return userLayout({
        content:`
        <style>
        .container{
            width:700px;
        }
        form{
            margin:40px;
        }
        </style>
        <div class="container">
        <h1 class="display-4 mt-5 mr-5">Edit the Nutrients</h1>
        <form method="POST" class = "w-50">
            <div id="form">
                <div class="form-group">
                    <label class="text-info"><strong>How many Gram did you Consume</strong></label>
                    <input type="number" class="form-control border-dark" name="gramsConsumed" value = "${dailyInfo.gramsConsumed}">
                </div>
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg float-right">Edit</button>
        </form>
    </div>
        `
    })
}