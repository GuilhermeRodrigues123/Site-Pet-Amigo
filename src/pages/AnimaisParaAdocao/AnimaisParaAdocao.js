import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../componentes/cartaPet';
import '../../global.css';
import './AnimaisParaAdocao.css';

const cartas=[
    {
        id: 1,
        nome: 'nome1',
        machoOuFemea: 'macho',
        idade: 'y anos',
    },
    {
        id: 2,
        nome: 'nome1',
        machoOuFemea: 'femea',
        idade: 'x anos',
    }
]

function AnimaisParaAdocao(){
    const history = useNavigate();
    return (
        <div>
            <h1>Animais para adocao</h1>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
            <div className= "todasAsCartas">
            {cartas.map((carta)=>(
                <cartapet key={carta.id} carta={carta}/>
            ))}
            </div>
        </div>
    );
}

export default AnimaisParaAdocao;