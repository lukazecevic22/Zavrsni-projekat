import React, { useState } from 'react'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg2, setErrorMsg2] = useState('')


    const handleLogin = () => {
        Login({username, password})
        if(username ===''){
            return setErrorMsg2('Username is empty')
        }
        if(password ===''){
            return setErrorMsg2('Password is empty')
        }
    }

    return (
        <form>
            <input type="text" className="loginUsername" placeholder="Username" required onInput={
                (e) => { setUsername(e.target.value) }} />
            <input type="text" className="loginPassword" placeholder="Password" required onInput={
                (e) => { setPassword(e.target.value) }} />
            <input type="submit" className="loginBtn" value="Login" onClick={() => { handleLogin() }}></input>
        </form>
    )
}

