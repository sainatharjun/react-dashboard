import React from 'react'
import './rightColumn.css'
import RetirementStrategy from './retirementStrategy'
import HousingAdvance from './housingAdvance'

function rightColumn(){
  return(
    <div id="rightColumn" className="col-sm-2">
      <RetirementStrategy/>
      <HousingAdvance/>
    </div>
  )
}

export default rightColumn