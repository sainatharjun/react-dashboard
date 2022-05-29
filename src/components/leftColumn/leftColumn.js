import React from 'react'
import './leftColumn.css'
import profilePic from '../../assets/images/profile.jpg'
import Transactions from './transactions'
import {ReactComponent as Bell} from '../../assets/images/bell.svg'

function leftColumn(){
  let accountBalance='19,892'
  let ytdContributions='4,000'
  let totalInterest='1892'
  return(
    <div id="leftColumn" className="col-md-3">
      <div className="mobNotifications" style={{float:'right'}}>
        <Bell/>
      </div>
     <div className="row">
     <img src={profilePic} className="profilePic" alt="profile pic"/>
      <div className="greetingDiv col">
        <h3>Hi Mike,</h3>
        <p>welcome back.</p>
      </div>
     </div>
    <div className="row">
    <div className="leftColumn-content">
      <h5>
        Today
      </h5>
      <h3>
        ${accountBalance}
      </h3>
      <p className="leftColumn-content-detail">Account Balance</p>
      <div className="moblc">
        <h5>
          ${ytdContributions}
        </h5>
        <p className="leftColumn-content-detail">Year-to-Date</p>
      </div>
      <div className="moblc">
        <h5>
          ${totalInterest}
        </h5>
        <p className="leftColumn-content-detail">Total Interest</p>
      </div>
      <button className="btn btn-primary iWantTo">
        I want to
        <i className="fa fa-caret-down lci" aria-hidden="true">&nbsp;&nbsp;</i>
        <span className="moblcpan" style={{display:'none'}}>...</span>
      </button>
     </div>
    </div>
    <Transactions/>
    </div>
  )
}

export default leftColumn;