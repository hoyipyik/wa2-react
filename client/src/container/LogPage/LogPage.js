import React, {useState, useEffect} from 'react'

import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import "../../App.css"

import Backdrop from '@mui/material/Backdrop'


const LogPage = (props) => {
  
    return (
        <div className='App'>
        <div className='logPage'>
            <div id='logpage'>
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
                <div id='log-switch'>
                  <span className='select' name="true" onClick={()=>props.signedHandler(true)}>Login</span>
                  <span id='gap'>{" / "}</span>
                  <span className='select' name="false" onClick={()=>props.signedHandler(false)}>Sign up</span>
                </div>
              </div>
            </div>
            <tag><Backdrop open={true} onClick={props.closeLogPage}/></tag>
          </div>
          </div>
    )
}

export default LogPage
