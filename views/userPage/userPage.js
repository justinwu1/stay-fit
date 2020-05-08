const userLayout = require('./userLayout');
const User = require('../../users/user');


module.exports = ({ userInfo }) => {
  let currentPercent;
  if (userInfo.progressWeight === 0 ) {
    currentPercent = 0;
  }
  currentPercent = 100 - (Math.abs((userInfo.goalWeight - userInfo.progressWeight)) / 10) * 100;
  if (currentPercent < 0) {
    currentPercent = 0;
  }
  let message = "";
  if (currentPercent <= 50) {
    message = "Keep Pushing";
  }
  if (currentPercent === 100) {
    message = "Congratulation!!!!!!";
  }else{
    message = "Almost there!!!!!!!";
  }
  if (userInfo.carbonhydrates === undefined) {
    userInfo.carbonhydrates = 0;
  }
  if (userInfo.protein === undefined) {
    userInfo.protein = 0;
  }
  if (userInfo.fats === undefined) {
    userInfo.fats = 0;
  }
  return userLayout({
    content:
      `
    <div class = "container">  
    <h1 class = "text-center display-3">Stay Strong / Stay Fit </h1>
    <ul class="list-group">
        <li class="list-group-item list-group-item-info">Personal Info<button class = "btn float-right btn-success"><a href = "/form">Edit</a></button></li>
        <li class="list-group-item">Initial Weight <span class = "float-right">${userInfo.currentWeight} lb</span></li>
        <li class="list-group-item">Goal Weight<span class = "float-right">${userInfo.goalWeight} lb</span></li>
        <li class="list-group-item">Daily Calories<span class = "float-right">${userInfo.goalCalorie}</span></li>
      </ul>
      <ul class="list-group" >
        <li class="list-group-item list-group-item-success">Nutrient Percentage<button class = "btn float-right btn-success"><a href = "/nutrient-edit">Edit</a></button></li>
        <li class="list-group-item">Carbonhydrates ${Math.round((userInfo.goalCalorie * (userInfo.carbonhydrates / 100) / 4))}g<span class = "float-right">${userInfo.carbonhydrates}%</li>
        <li class="list-group-item">Protein ${Math.round((userInfo.goalCalorie * (userInfo.protein / 100) / 4))}g<span class = "float-right">${userInfo.protein}%</li>
        <li class="list-group-item">Fats ${Math.round((userInfo.goalCalorie * (userInfo.fats / 100) / 9))}g<span class = "float-right">${userInfo.fats}%</li>
      </ul>
      <div class="progress">
    <div class="progress-bar bg-success" style = "width:${currentPercent}%;" role="progressbar"  aria-valuenow="${currentPercent}" aria-valuemin="0" aria-valuemax="100"><span style = "color:black"">${Math.round(currentPercent)}%</span></div>
  </div>
  <h1 class = "text-center display-3">${message}</h1>
  <form method = "POST">
  <button class = "btn btn-info float-right">Progress Update</button>
  <div class = "form-group">
    <label><strong>Progressing Weights</strong></label>
    <input name = "progressWeight" type="text" class="w-25 form-control border-dark float-right" placeholder = "lbs" required>
  </div>
  </form>
  
</div>
    `
  })
}