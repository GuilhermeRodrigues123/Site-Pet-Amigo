import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home(){
    const history = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => {history(-1);}}>
                retornar
            </button>
        </div>
    );
}

export default Home;