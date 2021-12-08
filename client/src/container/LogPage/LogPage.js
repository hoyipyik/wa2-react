import React from 'react'

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
              {props.loggedEmail!==""?
              <div>{ props.signed ?
              
                <Login logHandler={props.logHandler}/>:
                <SignUp signedHandler={props.signedHandler}/>
              }</div>:<p>You have logged as {props.loggedEmail}</p>}
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
