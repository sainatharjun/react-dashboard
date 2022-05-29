import React from 'react'
import './rightColumn.css'

function retirementStrategy(){
  return(
      <div className="retirementStrategy">
        <div className="mobrs">
            <h6 className="retirementStrategy-header">
              Retirement Strategy
            </h6>
            <p>Employee Contribution</p>
            <input type="range" className="slider" value={70}></input><span className="sliderSpan">12%</span>
            <p>Retirement Age</p>
            <input type="range" className="slider" value={90}></input><span className="sliderSpan">65</span>
            <hr/>
            <p className="nonSliderSpan-container">Employer Contribution<span className="nonSliderSpan">8.4%</span><br className="clear"/></p>
            <p className="nonSliderSpan-container">Interest Rate<span className="nonSliderSpan">5%</span><br className="clear"/></p>
        </div>    
        <center>
          <button className="btn btn-primary updateBtn">Update</button>
          <a>View Help Docs <i className="fa fa-angle-right"></i></a>
        </center>

      </div>
  )
}

export default retirementStrategy