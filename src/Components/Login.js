import React from "react";
import { loginUrl } from './Spotify'
const Login = () => {

    return(
        <div>
            <a href={loginUrl}>Sign In to Spotify</a>
        </div>
    )
}

export default Login;