import {AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import React, { useState } from 'react';
import { IconContext } from "react-icons/lib";
import {MdHome, MdPets, MdKeyboardTab, MdPerson} from "react-icons/md";
import "./Menu.css";
import {useHistory} from "react-router-dom"
import {FiMenu} from "react-icons/fi"

function Menu(props) {
const history= useHistory();
const [currentPage, setCurrentPage] = useState("/home")
const [open, setOpen] = useState("false")
function handleClick(pathName){
history.push(pathName);
setCurrentPage(pathName)}
function handleDrawer(isOpen) {
setOpen(isOpen);
}

    return
        <>
        <AppBar position="static">
            {props.children}
        </AppBar>
        <Toolbar style={{ backgroundColor: "white" }}>
         <IconButton edge="start" aria-label="menu" onClick ={()=> {handleDrawer(!open)}}>
             <FiMenu />
         </IconButton>
        </Toolbar>
    <Drawer open={open} onClose={()=> handleDrawer (false)}>
<List className="list">
<ListItem button selected={currentPage === "/home"} onClick={()=> {handleClick("/home")}}>
    <IconContext.Provider value={{ color: "#FFB100", size: "1.5em"}}>
    <MdHome />
    </IconContext.Provider>
    <ListItemText className="listItemText">
        <Typography>Home</Typography>
    </ListItemText>
</ListItem>
<ListItem button selected={currentPage === "/animais-para-adocao"} onClick={()=> {handleClick("/animais-para-adocao")}}>
    <IconContext.Provider value={{ color: "#FFB100", size: "1.5em"}}>
    <MdPets />
    </IconContext.Provider>
    <ListItemText className="listItemText">
        <Typography>Quero adotar</Typography>
    </ListItemText>
</ListItem>
<ListItem button selected={currentPage === "/login"} onClick={()=> {handleClick("/login")}}>
    <IconContext.Provider value={{ color: "#FFB100", size: "1.5em"}}>
    <MdKeyboardTab />
    </IconContext.Provider>
    <ListItemText className="listItemText">
        <Typography>Login/Cadastro</Typography>
    </ListItemText>
</ListItem>
<ListItem button selected={currentPage === "/meu-perfil"} onClick={()=> {handleClick("/meu-perfil")}}>
    <IconContext.Provider value={{ color: "#FFB100", size: "1.5em"}}>
    <MdPerson />
    </IconContext.Provider>
    <ListItemText className="listItemText">
        <Typography>Meu perfil</Typography>
    </ListItemText>
</ListItem>
</List>
</Drawer>;
</>
}

export default Menu;