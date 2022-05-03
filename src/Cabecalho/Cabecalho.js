import React from 'react';
import './Cabecalho'


function Cabecalho(){
    return(
    <body>
        <header>
        <img class ="logo" src = "./images/logo.png" alt ="Logo"></img>
            <nav>
            <ul class="header_titles"> 
                <li>
                    Inicio
                </li>
                <li>
                    Quero Adotar
                </li>
                <li>
                    Sobre Nós
                </li>
                <li>
                    Login
                </li>
            </ul>
            </nav>
        </header>
        </body>
    );
}
export default Cabecalho;