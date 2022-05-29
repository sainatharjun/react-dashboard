import React from 'react';
import './sidenav.css';
import logo from '../../assets/images/logo.png'
import {ReactComponent as Search} from '../../assets/images/search.svg'
import {ReactComponent as Home} from '../../assets/images/home.svg'
import {ReactComponent as News} from '../../assets/images/news.svg'
import {ReactComponent as User} from '../../assets/images/user.svg'
import {ReactComponent as Bell} from '../../assets/images/bell.svg'
import {ReactComponent as Logout} from '../../assets/images/logout.svg'
import {ReactComponent as List} from '../../assets/images/list.svg'

function sidenav(){
  return(
    <div id="sidenav" className="col-md-1">
      <div className="sidenav-inner">
      <div className="sidenav-top">
      <img src={logo} width="50%" alt="logo"/>
        <div className="icons">
        <Search/>
        </div>
     </div>
     <div className="sidenav-middle">
        <div className="icons">
        <Home/>
        </div>
        <div className="icons">
        <News/>
        </div>
        <div className="icons">
        <List/>
        </div>
        <div className="icons">
        <User/>
        </div>
     </div>
     <div className="sidenav-bottom">
        <div className="icons">
        <Bell/>
        </div>
        <div className="icons">
        <Logout/>
        </div>
     </div>
      </div>
    </div>
  )
}
export default sidenav;