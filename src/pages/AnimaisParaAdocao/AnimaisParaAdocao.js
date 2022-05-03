import React from 'react';
import {useNavigate} from 'react-router-dom';

function AnimaisParaAdocao(){
    const history = useNavigate();
    return (
        <div>
            <h1>Animais para adocao</h1>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    );
}

export default AnimaisParaAdocao;