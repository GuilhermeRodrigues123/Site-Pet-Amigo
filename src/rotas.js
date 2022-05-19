import React from 'react';
import { BrowserRouter, Route, Redirect, Routes } from 'react-router-dom';
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
            <HeaderFooter>
                {/* <Route component={() => <Redirect to="/preload" />} /> */}
                <Route path='/preload' component={PreLoad} />
                <Route path='/animais-para-adocao' component={AnimaisParaAdocao} />
                <Route path='/meu-perfil' component={MeuPerfil} />
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/cadastro' component={Cadastro} />
            </HeaderFooter>
        </BrowserRouter>
    );
}
export default Rotas;