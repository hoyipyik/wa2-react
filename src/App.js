import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/index'
import Playhouse from './components/Playhouse/playhouse'
import Member from './components/Member/member'
import Donate from './components/Donate/donate'


class App extends Component {
  render() {

    return (
      <div>
        <Switch>
          <Route path="/" exact >
            <Home/>
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
}

export default App