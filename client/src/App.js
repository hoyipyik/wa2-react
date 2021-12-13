import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import Home from './components/Home/index'
import Playhouse from './components/Playhouse/playhouse'
import Board from './components/Board/board'
import Donate from './components/Donate/donate'
import LogPage from './container/LogPage/LogPage'
import themeIcon from './img/theme-icon.png'

import "./App.css"

const App = () =>{
    // react useState Hooks 
    // cssFlag是更换主题的变量
    const [cssFlag, setCssFlag] = useState(false)
    //账户界面
    const [logPage, setLogPage] = useState(false)
    //登录用户的邮箱
    const [loggedEmail, setLoggedEmail] = useState('')
    //注册标示
    const [signed, setSigned] = useState(false)

    //更改主题函数
    const changeCss = () =>{
      setCssFlag(!cssFlag)
    }

    //开启账户页面
    const showLogPage = ()=>{
      setLogPage(true)
    }

    //关闭账户页面
    const closeLogPage = () =>{
      setLogPage(false)
    }

    //注册函数状态改变
    const signedHandler = (e) =>{
      setSigned(e)
    } 

    //登录函数状态改变
    const logHandler = (item) =>{
      setLoggedEmail(item)
    }

    //登出函数, 改变状态
    const logoutHandler =()=>{
      setLoggedEmail('')
    }

    /**
     * 
     */
    return (
      <div className='App'>
        <header>
            <h3><Link to='/'><a>White Album 2</a></Link></h3>
            <img alt='theme-changer' onClick={changeCss} id="theme-changer" src={themeIcon}/>
            <tag id='account' onClick={showLogPage}><AccountCircleIcon/></tag>
        </header>
        {logPage?
          <LogPage 
            logoutHandler={logoutHandler}
            logHandler={logHandler}
            closeLogPage={closeLogPage} 
            signed={signed}
            loggedEmail={loggedEmail}
            signedHandler={signedHandler}
          /> : null}
        <Switch>
          <Route path="/" exact>
            <Home cssFlag={cssFlag}/>
          </Route>
          <Route path="/playhouse">
            <Playhouse 
              cssFlag={cssFlag}
              loggedEmail={loggedEmail}/>
          </Route>
          
          <Route path="/board">
            <Board loggedEmail={loggedEmail}/>
          </Route>
          <Route path="/donate">
            <Donate/>
          </Route>
        </Switch>
      </div>
    )
}

export default App