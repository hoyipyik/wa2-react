import React, {useState, useEffect} from 'react'
import axios from "../../axios"
import "./Login.css"

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const inputHandler = (e) =>{
        const {name, value} = e.target
        if(name === "username")
            setUsername(value)
        else
            setEmail(value)
    }

    const loginSubmit = () =>{
        if(username!==""&&email!==""){
            const loginData = {username: username, email: email}
            axios.post("/login.json", loginData)
            .then(res=>{
                // console.log(res)
                const flag = res.data
                if(flag){
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

    return (
        <div className='Login'>
            <h4>Login</h4>
            <div className='group-item'>
                <p>Username</p>
                <input class='username-input' name='username' onClick={inputHandler}></input>
            </div>
            <div className='group-item'>
                <p>Email</p>
                <input name='email' onClick={inputHandler}></input>
            </div>
            
            <button onClick={loginSubmit}>Login</button>
        </div>
    )
}

export default Login
