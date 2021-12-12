import React, {useState, useEffect} from 'react'
import axios from '../../axios'
import "../Login/Login.css"

const SignUp = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

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

    const signupSubmit = () =>{
        if(username!==""&&email!==""){
            // console.log('try to submit signup')
            const signupData = {
                username: username,
                email: email,
                text: text,
            }
            // console.log(signupData)
            axios.post("/signup", signupData)
                .then(res=>{
                    // console.log(res)
                    const {flag} = res.data
                    console.log(flag, 'flag signup')
                    if(flag){
                        window.alert("success")
                        props.signedHandler(true)
                    }else{
                        window.alert("email error(or used)  or username use")
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
