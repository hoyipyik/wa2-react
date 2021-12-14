import React, {useState, useEffect} from 'react'

import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import "../../App.css"

import Backdrop from '@mui/material/Backdrop'

// 登入注册页面的容器
const LogPage = (props) => {
  
    return (
        <div className='App'>
        <div className='logPage'>
            {/* 登入界面 */}
            <div id='logpage'>
              {/* 主体内容的显示 */}
              <div className='container'>
              {!(props.loggedEmail!=="")?
              <div>{ props.signed ?
                <Login logHandler={props.logHandler}/>:
                <SignUp signedHandler={props.signedHandler}/>
              }</div>:<div>
                <p id="log-info">
                  You have logged as <br/>{props.loggedEmail}
                </p>
                <button id='log-out-button' onClick={props.logoutHandler}>Log Out</button>
                </div>}
                {/* 登录 注册切换 */}
                <div id='log-switch'>
                  <span className='select' name="true" onClick={()=>props.signedHandler(true)}>Login</span>
                  <span id='gap'>{" / "}</span>
                  <span className='select' name="false" onClick={()=>props.signedHandler(false)}>Sign up</span>
                </div>
              </div>
            </div>
            {/* 半透明的背景遮罩 */}
            <tag><Backdrop open={true} onClick={props.closeLogPage}/></tag>
          </div>
          </div>
    )
}

export default LogPage
