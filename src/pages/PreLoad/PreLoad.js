import React from 'react';
import {useNavigate} from 'react-router-dom'

function PreLoad(){
    const history = useNavigate();
    return(
        <div>
            <h1>PreLoad</h1>
            <div>
            <button onClick={() => {history("home");}}>
                Home
            </button>
            </div>
            <div>
            <button onClick={() => {history("animais-para-adocao");}}>
                Animais para adocao
            </button>
            </div>
            <div>
            <button onClick={() => {history("login");}}>
                Login
            </button>
            </div>
            <div>
            <button onClick={() => {history("cadastro");}}>
                Cadastro
            </button>
            </div>
            <div>
            <button onClick={() => {history("meu-perfil");}}>
                Meu perfil
            </button>
            </div>
        </div>
    );
}

export default PreLoad;