import React from 'react';
import {useNavigate} from 'react-router-dom';

function MeuPerfil(){
    const history = useNavigate();
    return (
        <div>
            <h1>MeuPerfil</h1>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    );
}

export default MeuPerfil;