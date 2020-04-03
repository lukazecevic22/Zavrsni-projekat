import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { registerUser, logInUser } from '../../private/coetus.services'
import { setToken, setId } from '../../private/auth.service'
import { Link } from 'react-router-dom'

export const Register = () => {
    const [name,setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    let user = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email,
    }

    const history = useHistory();

    const handleSubmit = () => {
        if(password === confirmPassword){
            registerUser(user).then(() => {
               logInUser(username,password).then(res => {
                   console.log(res)
                   setToken(res.data.token);
                   setId(res.data.user.user_id);
                   history.push("/dashboard");
               }) 
            })
        } else {
            alert(`error`);
        }
    }

    return(
        <form className="regfor" onSubmit={(e) => { 
            e.preventDefault(); 
            handleSubmit()}}>
            <div>
            <input type="text" placeholder="Name" className="name1"
            onInput={(e) => setName(e.target.value)} />
            </div>
            <div>
            <input type="text" placeholder="Surname" 
            onInput={(e) => setSurname(e.target.value)} />
            </div>
            <div>
            <input type="text" placeholder="Username" 
            onInput={(e) => setUsername(e.target.value)} />
            </div>
            <div>
            <input type="email" placeholder="Email" 
            onInput={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            <input type="password" placeholder="Password" 
            onInput={(e) => setPassword(e.target.value)} />
            </div>
            <div>
            <input type="password" placeholder="Confirm Password" 
            onInput={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div><input className="regform" type="submit" value="Register" /></div>
            <button><Link to="/">Back to login</Link></button>
        </form>
    )
}