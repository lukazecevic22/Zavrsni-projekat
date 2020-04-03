import React, { useEffect, useState } from 'react'

export const Register = () => {

    const [name, setName] = useState('')
    const [lastname, setLastame] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [correctPass, setCorrectPass] = useState('')
    const [samePass, setSamePass] = useState('')
    const [errorMsg1, setErrorMsg1] = useState('')


    useEffect(() => {
        function isCorrectPass() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setCorrectPass(true)
            }
            else {
                setCorrectPass(false)
            }
        }
        console.log(password)
        isCorrectPass()

    }, [password])

    useEffect(() => {
        setSamePass(confirmPassword === password)
        console.log(confirmPassword === password);
    }, [confirmPassword, password])


    function handleRegister(){
            if(username===''){
                return setErrorMsg1('Username can\'t be empty')
            }
            if(name===''){
                return setErrorMsg1('Name can\'t be empty')
            }
            if(lastname===''){
                return setErrorMsg1('Lastname can\'t be empty')
            }
            if(email===''){
                return setErrorMsg1('Email can\'t be empty')
            }
            if(password===''){
                return setErrorMsg1('Username can\'t be empty')
            }
            if(password !== confirmPassword){
                return setErrorMsg1 ('Password wasn\'t confirmed')
            }
            // if(!correctPass || !samePass)
            // return register({name,lastname,username,password,email})
    }
    

    return (
        <form>
            <input type="text" className="registerUsername" placeholder="Name" required onInput={
                e => { setName(e.target.value) }} />
            <input type="text" className="registerLastname" placeholder="Lastname" required onInput={
                e => { setLastame(e.target.value) }} />
            <input type="text" className="registerName" placeholder="Username" required onInput={
                e => { setUsername(e.target.value) }} />
            <input type="email" className="registerEmail" placeholder="Email" required onInput={
                e => { setEmail(e.target.value) }} />
            <input type="password" className="resisterPassword" placeholder="Password" required onInput={
                e => { setPassword(e.target.value) }} />
            <input type="password" className="confirmRegisterPassword" placeholder="Confirm Password" required onInput={
                e => { setConfirmPassword(e.target.value) }} />

            <input type="submit" className="registerConfirmBtn" value="Register" onClick={()=>{handleRegister()}}></input>
            
        </form>
    )
}