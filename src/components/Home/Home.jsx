import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div>
           <h2>Tshirt {tShirts.length}</h2>
            
        </div>
    );
};

export default Home;