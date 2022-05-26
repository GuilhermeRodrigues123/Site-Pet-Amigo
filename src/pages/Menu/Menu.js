import { Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import React, { useState } from 'react';
import { IconContext } from "react-icons/lib";
import {MdHome, MdPets, MdKeyboardTab, MdPerson} from "react-icons/md";
import "./Menu.css";
import {useHistory} from "react-router-dom"
import {FiMenu} from "react-icons/fi"

function Menu(props) {
const history= useHistory();
const [currentPage, setCurrentPage] = useState("/home")
const [open, setOpen] = useState(false)
function handleClick(pathName){
history.push(pathName);
setCurrentPage(pathName)}
function handleDrawer(isOpen) {
setOpen(isOpen);
}

const pages=[{
    pathName: "/home",
    icon: <MdHome />,
    text: "Home",
},
{ 
    pathName: "/animais-para-adocao",
    icon: <MdPets />,
    text: "Quero adotar",
},
{
    pathName: "/login",
    icon: <MdKeyboardTab />,
    text: "Login/Cadastro",
},
{
    pathName: "/meu-perfil",
    icon: <MdPerson />,
    text: "Meu perfil",
},
];

    return (
        <div className="Container">
        <Toolbar style={{ backgroundColor: "inherit" }}>
         <IconButton edge="start" aria-label="menu" onClick ={()=> {handleDrawer(!open)}}>
             <FiMenu />
         </IconButton>
        </Toolbar>
    <Drawer open={open} onClose={()=> handleDrawer (false)}>
<List className="list">
    {pages.map(( listItem ) => {
return( <ListItem button selected={currentPage === listItem.pathName} onClick={()=> {handleClick(listItem.pathName)}}>
    <IconContext.Provider value={{ color: "#FFB100", size: "1.5em"}}>
    {ListItem.icon}
    </IconContext.Provider>
    <ListItemText className="listItemText">
        <Typography>{listItem.text}</Typography>
    </ListItemText>
</ListItem>
);
    })}

</List>
</Drawer>
</div>
);
}

export default Menu;