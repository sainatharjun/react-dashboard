import React from 'react';
import DoughnutComponent from './DoughnutComponent';

function comparisonDiv(){
  return(
    <div className="comparisonDiv">
      <h5>How do I compare with my peers?</h5>
      <p>These numbers represent current goal achievements</p>
      <div className="row">
        <div className="compText col-lg-5">
          <b>Age:</b> Under 30 <i className="fa fa-caret-down" aria-hidden="true"></i>
          <hr/>
          <b>Salary:</b> K 20 - K 30 <i className="fa fa-caret-down" aria-hidden="true"></i>
          <hr/>
          <b>Gender:</b> Male <i className="fa fa-caret-down" aria-hidden="true"></i>
          <hr/>
        </div>
        <div className="col-lg-7" style={{textAlign:'center',padding:0}}>
          <DoughnutComponent text="78%"span="Average" val={78}/>
          <DoughnutComponent text="95%" span="Top" val={95}/>
          <DoughnutComponent text="59%" span="Me" val={59}/>
        </div>
      </div>
    </div>
  )
}
export default comparisonDiv