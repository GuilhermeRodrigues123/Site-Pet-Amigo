import React from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    const history = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    );
}

export default Login;