import React from "react";
import { loginUrl } from './Spotify'
const Login = () => {

    return(
        <div>
            <h1>Login Component</h1>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login;