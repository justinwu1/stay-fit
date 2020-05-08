const userLayout = require('./userLayout');

module.exports = ({ analysisInfo }, { user }) => {
    let color = "";
    
    let goalCal = user.goalCalorie;
    if(goalCal > analysisInfo.caloriesOfTheDay){
        color = "text-success";
    }else{
        color = "text-danger";
    }
    const renderAnalysis = analysisInfo.map((info) => {
        info.date = info.date.slice(0,15);
        return `
        <tr>
            <td>${info.date}</td>
            <td>${goalCal}</td>
            <td class = "${color}">${info.caloriesOfTheDay}</td>
        </tr>
        `
    }).join('');
    return userLayout({
        content:
            `
    
    <div class="section1">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Dates</th>
                <th scope="col">Goal Calories </th>
                <th scope="col">Day of the Calories</th>
            </tr>
        </thead>
        <tbody>
            ${renderAnalysis}
            
        </tbody>
    </table>
    
</div>
<form method = "POST" action = "/analysis/deleteAll" >
    <button id = "clearAllBtn"class ="float-right btn btn-dark">Clear all</button>
</form>



</div>
    `
    })
}