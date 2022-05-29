import React from 'react';
import './middleColumn.css'
function numberDiv(){
  let startingYear=2056
  let myGoal='$300,000'
  let goalAchieved="59%"
  let estMonthlyIncome="$300"
return(
  <div>
    <div className="middleColumn-header">
      <p>Retirement Income</p>
      <h4>Starting Year {startingYear}</h4>
    </div>
    <div className="numberDiv row">
      <div className="col numberDiv-child">
        <h4>{myGoal}</h4>
        <span>My Goal</span>
        <hr/>
      </div>
      <div className="col numberDiv-child">
        <h4>{goalAchieved}</h4>
        <span>Goal Achieved</span>
        <hr/>
      </div>
      <div className="col numberDiv-child">
        <h4>{estMonthlyIncome}</h4>
        <span>Est. Monthly Income</span>
        <hr/>
      </div> 
    </div>
  </div>
)
}
export default numberDiv;