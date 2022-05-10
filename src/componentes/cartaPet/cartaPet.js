import React from 'react';
import "../../global.css";
import './cartaPet.css';

function cartapet({carta}){
    return(
        <div className="carta">
            {//<div className="foto"></div>
            }
            <div className="nome">{carta.nome}</div>
            <div className="machoOuFemea">{carta.machoOuFemea}</div>
            <div className="idade">{carta.idade}</div>
            {//<div className="botaoSaibaMais"></div>
            }
            {//<div className="botaoQueroAdotar"></div>
            }
            {//<div className="botaoFavoritar"></div>
            }
        </div>
    );
}

export default cartapet;