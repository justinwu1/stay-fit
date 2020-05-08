

module.exports = ({ dailyInfo }, { user }) => {

    let calories = 0, proteins = 0, carbonhydrates = 0, fats = 0;
    for (let item of dailyInfo) {
        calories += (item.calories / item.grams * item.gramsConsumed);
        proteins += ((item.proteins / item.grams) * item.gramsConsumed);
        carbonhydrates += (item.carbonhydrates / item.grams * item.gramsConsumed);
        fats += (item.fats / item.grams * item.gramsConsumed);
    }
    const renderDailyInfo = dailyInfo.map((info) => {
        return `
    <tr>
        <td>${info.food}</td>
        <td>${info.gramsConsumed}</td>
        <td>${info.calories}</td>
        <td>${Math.round(info.calories / info.grams * info.gramsConsumed)}</td>
        <td>${Math.round(info.carbonhydrates / info.grams * info.gramsConsumed)}g</td>
        <td>${Math.round(info.proteins / info.grams * info.gramsConsumed)}g</td>
        <td>${Math.round(info.fats / info.grams * info.gramsConsumed)}g</td>
        <td><a href = "/dailyInfo/${info._id}/edit" class = "btn btn-info">Edit</td>

        <td>
        <form method = "POST" action = "/dailyInfo/${info._id}/delete">
            <button class = "btn btn-danger">Delete</a>
        </form>
        </td>
        
    </tr>
        `
    }).join('');
    return `
    <!DOCTYPE html>
    <html lang = "en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="daily.css">
        <title>Stayfit</title>
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Stayfit</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class = "nav-item">
                        <a class = "nav-link" href = "/analysis"> History </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/daily-calorie">Daily Calorie</a>
                    </li>
                    <li class = "nav-item">
                        <a class = "nav-link" href = "/user"> Profile </a>
                    </li>
                    <li class = "nav-item">
                        <a class = "nav-link" href = "/sighout"> Sign out </a>
                    </li>
    
                </ul>
            </div>
        </nav>
        <div class="container float-left">
            <div class="section1">
                <form method = "POST">
                    <h3 class="text-center">One Click</h3>
                    <hr>
                    </hr>
                    <div id="form">
                        <div class="form-group">
                            <label><strong>Food Name</strong></label>
                            <input name="food" type="text" class="form-control border-dark" placeholder="Chicken Breast" >
                        </div>
                        <div class="form-group">
                            <label><strong>Grams</strong></label>
                            <input type="number" class="form-control border-dark" name="grams" placeholder="100g" >
                        </div>
                        <div class="form-group">
                            <label><strong>Calories</strong></label>
                            <input type="number" class="form-control border-dark" name="calories" placeholder="133Cal/100g" >
                        </div>
                        <div class="form-group">
                            <label><strong>Carbonhydrates</strong></label>
                            <input type="number" class="form-control border-dark" name="carbonhydrates" placeholder="2g Carb" >
                        </div>
                        <div class="form-group">
                            <label><strong>Protein</strong></label>
                            <input type="number" class="form-control border-dark" name="proteins" placeholder="19g Protein" >
                        </div>
                        <div class="form-group">
                            <label><strong>Fats</strong></label>
                            <input type="number" class="form-control border-dark" name="fats" placeholder="5g Fats">
                        </div>
                        <div class="form-group">
                            <label class = "text-info"><strong>How many Gram did you Consume</strong></label>
                            <input type="number" class="form-control border-dark" name="gramsConsumed" placeholder="50g/67Cal">
                        </div>
                    </div>
                    <button id = "addButton"type="submit" class="btn btn-outline-info btn-lg float-right">Add</button>
                </form>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item list-group-item-info">Daily Info</li>
                    <li class = "list-group-item">Current Calories <p class = "float-right"> ${Math.round(calories)}Cal</p></li>
                    <li class = "list-group-item">Goal Calories <p class = "float-right"> ${user.goalCalorie}Cal</p></li>
                    <li class="list-group-item">Carbonhydrates <p class = "float-right"> ${Math.round(carbonhydrates)}g</p></li>
                    <li class="list-group-item">Protein <p class = "float-right"> ${Math.round(proteins)}g</p></li>
                    <li class="list-group-item">Fats <p class = "float-right"> ${Math.round(fats)}g</p></li>
                  </ul>
                  
            </div>
            
        </div>
        

        <div class="section2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Food</th>
                        <th scope="col">Consumed Grams </th>
                        <th scope="col">Calories</th>
                        <th scope="col">Total Calories </th>
                        <th scope="col">Carbonhydrates</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Fats</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    ${renderDailyInfo}
                </tbody>
            </table>
            
        </div>
        <form method = "POST" action = "/daily-calorie/deleteAll" >
            <button class ="mr-5 btn btn-dark float-right">Clear all</button>
        </form>
        <form method = "POST" action = "/analysis" >
        <button  name = "caloriesOfTheDay" value = "${calories}" type = "submit" class ="mr-5 btn btn-primary float-right">Send to Analyze</button>
        </form>
    
    
        </div>
    
    </body>
    
    </html>
    `
}