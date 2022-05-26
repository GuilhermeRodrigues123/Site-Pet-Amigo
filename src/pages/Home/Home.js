import React from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../global.css";
import "./home.css"

function Home() {
    const history = useHistory();
    return (
        <div className='mom'>
            <Carousel className="paginaCarrossel" variant="dark">
                <Carousel.Item>
                    <img onClick={() => { history.push("/animais-para-adocao"); }}
                        className="carrosselImg"
                        src="/images/banner1.png" />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carrosselImg"
                        src="/images/Carrossel2.png" />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carrosselImg"
                        src="/images/carrossel3.png" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <div className="homeMom">
                <div className="textHome">
                    <img className="img1" src="/images/petHomeimg.png"></img>
                    <div className="titHome">Por que devo adotar um pet?</div>
                    <p>Você terá um novo companheiro e amigo que fará <br /> parte da sua vida;</p>
                    <p>Você irá ajudar a causa animal, dando um lar a <br /> animais abandonados ou que moram na rua</p>
                    <p>Vai trazer felicidade para sua casa, pois um pet <br /> pode proporcionar vários momentos de alegria.</p>
                    <p>Escolhendo adotar ao invés de comprar, você<br /> não contribui com a exploração animal.</p>
                    <p>E muitos outros motivos!<br />Não perca tempo, adote um amigo agora mesmo!</p>
                    <button className="homeButton" onClick={() => { history.push("/animais-para-adocao"); }}>Adote aqui</button>
                </div>
                <div className="textHome2">
                    <img className="img2" src="/images/img2Home.png"></img>
                    <div className="titHome">Um pouco sobre a Pet Amigo</div>
                    A Pet Amigo é um projeto idealizado a partir de um sonho, <br /> no qual todos os animais têm o direito de viver uma vida digna<br /> e lotada de amor. <br />
                    Somos uma instituição sem fins lucrativos, responsáveis por <br />tirar os pets da situação de abandono e maus tratos e
                    criar a <br />ponte entre eles e suas futuras famílias e desde 2010, já <br />resgatamos mais de 1500 animais para serem adotados.
                </div>
            </div>
            <div className="cardMom">
                <div className="cardHome"><img className="imgHome" src="/images/p1home.png" />
                    - Olivia
                    <p />
                    <p>"Desde quando o Pluto chegou em minha vida, minha casa é repleta de alegria!"</p>
                </div>
                <div className="cardHome"><img className="imgHome" src="/images/p2home.png" />
                    - Cristiano
                    <p />
                    <p>"O Luffy é a melhor companhia que alguém pode ter!"</p>
                </div>
                <div className="cardHome"><img className="imgHome" src="/images/p3home.png" />
                    - Henrique
                    <p />
                    <p>"Juliano foi um enorme presente que entoru em minha vida!"</p>
                </div>
                <div className="cardHome"><img className="imgHome" src="/images/p4home.png" />
                    - Renata
                    <p />
                    <p>"A Bella é a minha companheira de viagens! Sempre está comigo!"</p>
                </div>
            </div>
        </div>
    );
}
export default Home;