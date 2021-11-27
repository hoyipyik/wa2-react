import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/index'
import Playhouse from './components/Playhouse/playhouse'
import Member from './components/Member/member'
import Donate from './components/Donate/donate'
import themeIcon from './img/theme-icon.png'


import "./App.css"

const App = () =>{
    const [cssFlag, setCssFlag] = useState(false)

    const changeCss = () =>{
      setCssFlag(!cssFlag)
    }

    return (
      <div className='App'>
        <header>
            <h3><a href="/">White Album 2</a></h3>
            <img onClick={changeCss} id="theme-changer" src={themeIcon}/>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home cssFlag={cssFlag}/>
          </Route>
          <Route path="/playhouse.html">
            <Playhouse/>
          </Route>
          <Route path="/member.html">
            <Member/>
          </Route>
          <Route path="/donate.html">
            <Donate/>
          </Route>
        </Switch>
      </div>
    )
}

export default App