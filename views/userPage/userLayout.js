module.exports = ({ content }) => {
  return `
        <!DOCTYPE html>
        <html lang  = "en">
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="users.css">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Stayfit </title>
        </head>
        <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Stayfit</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/analysis">History</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="/daily-calorie">Daily Calorie </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/user">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signout">Sign out</a>
          </li>
          </ul>
        </div>
      </nav>
            ${content}
        </body>
        </html>
    `
}