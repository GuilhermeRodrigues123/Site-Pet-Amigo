import React from 'react';
import { useHistory } from 'react-router-dom';
import "./PreLoad.css"

function PreLoad() {
    const history = useHistory();
    return (
        <body>
        <div className="mom">
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
            <div>
            <button onClick={() => {history("recuperar-senha");}}>
                Recuperar Senha
            </button>
            </div>
        </div>
        </body>
    );
}

export default PreLoad;