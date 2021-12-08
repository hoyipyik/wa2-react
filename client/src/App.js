import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home/index'
import Playhouse from './components/Playhouse/playhouse'

// import Member from './components/Member/member'
import Board from './components/Board/board'
import Donate from './components/Donate/donate'
import themeIcon from './img/theme-icon.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import "./App.css"
import LogPage from './container/LogPage/LogPage'


const App = () =>{
    const [cssFlag, setCssFlag] = useState(false)
    const [logPage, setLogPage] = useState(false)
    const [logged, setLogged] = useState(false)
    const [signed, setSigned] = useState(false)

    const changeCss = () =>{
      setCssFlag(!cssFlag)
    }

    const showLogPage = ()=>{
      setLogPage(true)
    }

    const closeLogPage = () =>{
      setLogPage(false)
    }

    const signedHandler = (e) =>{
      const name = e
      // console.log(name)
      setSigned(name)
    } 

    return (
      <div className='App'>
        <header>
            <h3><Link to='/'><a>White Album 2</a></Link></h3>
            <img onClick={changeCss} id="theme-changer" src={themeIcon}/>
            <tag id='account' onClick={showLogPage}><AccountCircleIcon/></tag>
        </header>
        {logPage?
          <LogPage 
            closeLogPage={closeLogPage} 
            signed={signed}
            signedHandler={signedHandler}
          /> : null}
        <Switch>
          <Route path="/" exact>
            <Home cssFlag={cssFlag}/>
          </Route>
          <Route path="/playhouse.html">
            <Playhouse/>
          </Route>
          {/* <Route path="/member.html"> */}
          <Route path="/board.html">
            {/* <Member/> */}
            <Board/>
          </Route>
          <Route path="/donate.html">
            <Donate/>
          </Route>
        </Switch>
      </div>
    )
}

export default App