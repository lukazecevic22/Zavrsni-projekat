import React from 'react'
import { useHistory } from 'react-router-dom';
import { deleteToken } from '../../private/auth.service';

export const Logout = () => {

    const history = useHistory();

    const handleClick = (e) => {
        deleteToken().then(() => {
            history.push("/login");
        })
    }
    return (
        <div>
            <button className="btn btn-primary btn-block" onClick={(e) => handleClick(e)}>Log Out</button>
        </div>
    )

}