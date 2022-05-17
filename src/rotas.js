import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import PreLoad from './pages/PreLoad';
import MeuPerfil from './pages/MeuPerfil';
import AnimaisParaAdocao from './pages/AnimaisParaAdocao';
import HeaderFooter from './HeaderFooter/HeaderFooter';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PreLoad />} />;
                <Route exact path='/animais-para-adocao' element={<AnimaisParaAdocao />} />
                <Route exact path='/meu-perfil' element={<MeuPerfil />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

function UserMenu() {
    return (
        <HeaderFooter>
            <Routes>
                <Route exact path='/cadastro' element={<Cadastro />} />
            </Routes>
        </HeaderFooter>
    );
}

export default Rotas;