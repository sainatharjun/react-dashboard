import React from 'react'
import './bottomnav.css';
import {ReactComponent as Search} from '../../assets/images/search.svg'
import {ReactComponent as Home} from '../../assets/images/home.svg'
import {ReactComponent as News} from '../../assets/images/news.svg'
import {ReactComponent as User} from '../../assets/images/user.svg'
import {ReactComponent as Bell} from '../../assets/images/bell.svg'
import {ReactComponent as Logout} from '../../assets/images/logout.svg'
import {ReactComponent as List} from '../../assets/images/list.svg'

function bottomnav(){
  return(
    <div id="bottomnav">
        <div className="bnicons">
          <Home/>
        </div>
        <div className="bnicons">
         <News/>
        </div>
        <div className="bnicons">
         <List/>
        </div>
        <div className="bnicons">
          <User/>
        </div>
        <div className="bnicons">
          <Search/>
        </div>
    </div>
  )
}
export default bottomnav