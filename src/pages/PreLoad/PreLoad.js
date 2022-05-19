import React from 'react';
import { useHistory } from 'react-router-dom'

function PreLoad() {
    const history = useHistory();
    return (
        <div>
            <h1>PreLoad</h1>
            <div>
                <button onClick={() => { history.push("/home"); }}>
                    Home
                </button>
            </div>
            <div>
                <button onClick={() => { history.push("/animais-para-adocao"); }}>
                    Animais para adocao
                </button>
            </div>
            <div>
                <button onClick={() => { history.push("/login"); }}>
                    Login
                </button>
            </div>
            <div>
                <button onClick={() => { history.push("/cadastro"); }}>
                    Cadastro
                </button>
            </div>
            <div>
                <button onClick={() => { history.push("/meu-perfil"); }}>
                    Meu perfil
                </button>
            </div>
        </div>
    );
}

export default PreLoad;