import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import "../Login/Login.css"

// 和登录的类似
const SignUp = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    // input内容
    const signHandler = (e) =>{
        const {name, value} = e.target
        if(name === "username"){
            setUsername(value)
        }else if(name === "email"){
            setEmail(value)
        }else{
            setText(value)
        }
    }

    // 提交函数
    const signupSubmit = () =>{
        if(username!==""&&email!==""){
            const signupData = {
                username: username,
                email: email,
                text: text,
            }
            // http post
            axios.post("/signup", signupData)
                .then(res=>{
                    const {flag} = res.data
                    console.log(flag, 'flag signup')
                    if(flag){
                        window.alert("success")
                        props.signedHandler(true)
                    }else{
                        window.alert("email error(or used) or username used")
                    }
                })
        }
    }

    return (
        <div className='Login'>
            <h4>Sign up</h4>
            <div className='group-item'>
                <p>Username</p>
                <input class='username-input' value={username} name='username' onChange={signHandler}></input>
            </div>
            <div className='group-item'>
                <p>Email</p>
                <input name='email' value={email} onChange={signHandler}></input>
            </div>

            <div className='group-item'>
                <p>Introduce yourself</p>
                <textarea name='text' value={text} onChange={signHandler}></textarea>
            </div>

            <button onClick={signupSubmit}>Sign up</button>
        </div>
    )
}

export default SignUp
