module.exports = () => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="home.css">
    <title>Stayfit</title>
</head>

<body>
    
    <nav class="navbar bg-dark navbar-dark">
        <div class="container">
            <a href="/homepage" class="navbar-brand">
                <ion-icon class = "mr-1"name="layers-outline"></ion-icon>
                Stayfit
            </a>
            
            <a class = "btn btn-outline-light ml-auto" href = "/signin">Sign in</a>
        </div>
    </nav>
    <section class="container-fluid header text-center jumbotron">
        <h1 class="display-5">Always Stay fits. <br>Everyday</h1>
        <p class="lead">Record Daily Calories, Track Progress, Set Goals,<br>History, and Motivation. Makes your fitness easier. <br>In one App  </p>
        <a class = "btn btn-outline-light" href = "/signup">Sign up for Free!</a>
        
    </section>
    <section id="introduction">
        <div class = "container">
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <img class = "card-img-top" src = "images/setgoal.jpg">
                    <div class = "card-body">
                    <h5 class = "card-title">Set Goal</h5>
                    <p class="card-text">Set your fitness goal and always keep track your weight everyday.</p>
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <img class = "card-img-top " src = "images/table.jpg">
                    <div class = "card-body">
                    <h5 class = "card-title">Nutrient Table</h5>
                    <p class="card-text">The tables allows you to input the data and automatically calculate your total calories.It also keep track of your goal calories and your current consumed calories</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
</body>

</html>
    `
}