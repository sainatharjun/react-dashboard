import React from 'react';

function transactions(){
  var date1="2020-08-07"
  var date2="2020-07-21"
  var date3="2020-07-16"

  return(
    <div className="row">
      <div className="leftColumn-content">
        <h5 className="transactionHeader">Recent Transactions</h5>
        <p className="leftColumn-content-detail">{date1}</p>
        <p>Withdrawal transfer to Bank-XXX11</p>
        <hr/>
        <p className="leftColumn-content-detail">{date2}</p>
        <p>Withdrawal transfer to Bank-XXX11</p>
        <hr/>
        <p className="leftColumn-content-detail">{date3}</p>
        <p>Withdrawal transfer to Bank-XXX11</p>
        <hr/>
      </div>
    </div>
  )
}
export default transactions;