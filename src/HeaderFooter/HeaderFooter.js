import React from 'react';
//import React, { useState } from 'react';
import './HeaderFooter'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Form} from "react-bootstrap";
import{FormControl} from "react-bootstrap";



function HeaderFooter(){
    return(
    <>
    <head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dosis&family=Poppins:wght@700&display=swap');</style>
    </head>
    <body>
        <header>
            <img className ="logo" src = "./images/logo.png" alt ="Logo"></img>
            <div className = "header_titles">
                <h1>Inicio</h1>                
                <h1>Quero Adotar </h1>             
                <h1>Sobre nós</h1>
                <h1>Login</h1>
            </div>
            <Form className="d-flex">
                <FormControl className="pesquisa" type="search" placeholder="Pesquisa" aria-label="Pesquisa"/>
                <Button className="butaoPesquisa"variant="outline-primary">Buscar</Button>
            </Form>
            <img className ="perfil" src = "./images/conta.svg" alt ="conta"></img>         
        </header>
        
        <footer>
            <div className = "footer_left">
                <img className ="logo" src = "./images/logo_alt.svg" alt ="Logo"></img>
                <h1>Pet amigo é uma plataforma criada para proporcionar um lar à animais abandonados. 
                    Iremos juntos promover a cultura de adoção, para os pets que tanto amamos.</h1>            
            </div>
            <div className='footer_right'>
                <div className ='footer_contato'>   
                    <img src = "./images/insta.svg" alt ="insta"></img>
                    <h1> @PETAMIGO</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/zap.svg" alt ="insta"></img>
                    <h1> (31) 99333-3333</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/telefone.svg" alt ="insta"></img>
                    <h1> (31) 3333-3333</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/email.svg" alt ="insta"></img>
                    <h1> PETAMIGO@CPEJR.COM.BR</h1>
                </div> 
            </div>
        </footer>
    </body>
    </>
    );
}
export default HeaderFooter;