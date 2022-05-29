import React from 'react';
import ChartDiv from './chartDiv';
import ComparisonDiv from './comparisonDiv';
import './middleColumn.css'
import NumberDiv from './numberDiv';
function middleColumn(){
  let startingYear=2056
  let myGoal='$300,000'
  let goalAchieved="59%"
  let estMonthlyIncome="$300"
return(
  <div id="middleColumn" className=" col-sm-6">
    <NumberDiv/>
    <ChartDiv/>
    <ComparisonDiv></ComparisonDiv>
  </div>
)
}
export default middleColumn;