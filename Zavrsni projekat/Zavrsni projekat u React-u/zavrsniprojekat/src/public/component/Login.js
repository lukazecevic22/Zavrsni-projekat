import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import { setToken, setId } from '../../private/auth.service';
import { logInUser } from '../../private/coetus.services';
// import { Register } from './Register';
import { Link } from 'react-router-dom'


export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [/*errorMsg2*/, setErrorMsg2] = useState('')

    const history=useHistory();

    const handleLogin = () => {
        if(username ===''){
            return setErrorMsg2('Username is empty')
        }
        if(password ===''){
            return setErrorMsg2('Password is empty')
        }
        logInUser(username, password).then(res=>{
            setToken(res.data.token);
            setId(res.data.user.user_id)
            history.push("/dashboard");
        })

        
    }
    return (
        <form className="login-form">
            <input type="text" className="loginUsername" placeholder="Username" required onInput={
                (e) => { setUsername(e.target.value) }} />{<br></br>}
            <input type="password" className="loginPassword" placeholder="Password" required onInput={
                (e) => { setPassword(e.target.value) }} />{<br></br>}
            <input type="submit" className="loginBtn" value="Login" onClick={e=>{e.preventDefault()
                 handleLogin()}}></input>
                <button className="loginBtn"> <Link to="/register"> Register
                 </Link></button>
        </form>
    )
}

