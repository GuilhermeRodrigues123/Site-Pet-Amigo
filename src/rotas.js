import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Home from './pages/Home';
import PreLoad from './pages/PreLoad';
import MeuPerfil from './pages/MeuPerfil';
import AnimaisParaAdocao from './pages/AnimaisParaAdocao';
import HeaderFooter from './HeaderFooter/HeaderFooter';
import { isAuthenticated } from "./services/auth";
import Contato from './pages/Contato';
import Menu from './pages/Menu';

function Rotas(){
    return (
        <BrowserRouter>
            <HeaderFooter>
                {/* <Route component={() => <Redirect to="/preload" />} /> */}
                <Route exact path='/preload' component={PreLoad} />
                <Route exact path='/animais-para-adocao' component={AnimaisParaAdocao} />
                <Route exact path='/meu-perfil' component={MeuPerfil} />
                <Route path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/cadastro' component={Cadastro} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path='/temp' component={Menu} />
            </HeaderFooter>
        </BrowserRouter>
    );

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/cadastro", state: { from: props.location } }} />
      )
    }
  />
);

function Rotas() {
  return (
    <BrowserRouter>
      <HeaderFooter>
        <Route component={() => <Redirect to="/home" />}/> 
        <Route path='/animais-para-adocao' component={AnimaisParaAdocao} />
        <PrivateRoute path='/meu-perfil' component={MeuPerfil} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/contato' component={Contato} />
      </HeaderFooter>
    </BrowserRouter>
  );
}

function UserMenu(){
    return(
        <Menu>
        <Route path='/home' component={Home} />
        <Route component={()=> <Redirect to="/home" />} />
    </Menu>
    );
}

export default Rotas;