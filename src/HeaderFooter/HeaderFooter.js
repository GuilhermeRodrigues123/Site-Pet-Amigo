import React from 'react';
//import React, { useState } from 'react';
import './HeaderFooter'



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
        <div className = "header">
            <img className ="logo" src = "./images/logo.png" alt ="Logo"></img>
            <div className = "header_titles">
                <h1>Inicio</h1>                
                <h1>Quero Adotar </h1>             
                <h1>Sobre nós</h1>
                <h1>Login</h1>
                <h1><div className='BarraPesquisa' > 
                    <input type="text" id="pesquisa" size="40" placeholder="Pesquisar Pet..."/></div>
                </h1>
            </div>
            <img className ="meuPerfil" src = "./images/conta.png" alt ="conta"></img>
        </div>            
        </header>
        
        <footer>
            <div className = "footer_left">
                <img className ="logo_alt" src = "./images/logo_alt.png" alt ="Logo"></img>
                <h1>Pet amigo é uma plataforma criada para proporcionar um lar à animais abandonados. 
                    Iremos juntos promover a cultura de adoção, para os pets que tanto amamos.</h1>            
            </div>
            <div className='footer_right'>
                <div className ='footer_contato'>   
                    <img src = "./images/insta.png" alt ="insta"></img>
                    <h1> @PETAMIGO</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/zap.png" alt ="insta"></img>
                    <h1> (31) 99333-3333</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/telefone.png" alt ="insta"></img>
                    <h1> (31) 3333-3333</h1>
                </div>
                <div className ='footer_contato'>   
                    <img src = "./images/email.png" alt ="insta"></img>
                    <h1> PETAMIGO@CPEJR.COM.BR</h1>
                </div> 
            </div>
        </footer>
        </body>
        </>
    );
}
export default HeaderFooter;