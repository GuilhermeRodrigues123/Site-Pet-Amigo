import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import PreLoad from './pages/PreLoad';
import MeuPerfil from './pages/MeuPerfil';
import AnimaisParaAdocao from './pages/AnimaisParaAdocao';


function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<PreLoad/>}/>;
                <Route path='/animais-para-adocao' element={<AnimaisParaAdocao/>}/>
                <Route path='/meu-perfil' element={<MeuPerfil/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;