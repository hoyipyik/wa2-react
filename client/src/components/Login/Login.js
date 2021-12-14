import React, {useState, useEffect} from 'react'
import axios from "../../axios"
import "./Login.css"

// 登入模块
const Login = (props) => {
    // state 存放用户名和邮件
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    // 输入处理函数, 根据对应的input的name来给state赋值
    const inputHandler = (e) =>{
        const {name, value} = e.target
        if(name === "username")
            setUsername(value)
        else
            setEmail(value)
    }

    // 提交函数
    const loginSubmit = () =>{
        // 如果都不为空的情况下可以点击触发
        if(username!==""&&email!==""){
            const loginData = {username: username, email: email}
            // 发送内容
            axios.post("/login", loginData)
            .then(res=>{
                console.log(res.data)
                const {flag} = res.data
                // 受到反馈, 并且做出是否允许登入的判断
                if(flag){
                    // 将已经登录的email存放到app的loggedEmail state
                    props.logHandler(email)
                    setUsername("")
                    setEmail("")
                }else{
                    window.alert("Login falied")
                }
            })
            .catch(err=>console.log(err))
        }
    }

    // jsx 简单的界面
    return (
        <div className='Login'>
            <h4>Login</h4>
            <div className='group-item'>
                <p>Username</p>
                <input class='username-input' name='username' value={username} onChange={inputHandler}></input>
            </div>
            <div className='group-item'>
                <p>Email</p>
                <input name='email' value={email} onChange={inputHandler}></input>
            </div>
            
            <button onClick={loginSubmit}>Login</button>
        </div>
    )
}

export default Login
