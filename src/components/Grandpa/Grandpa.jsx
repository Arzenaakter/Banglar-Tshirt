import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export  const ringContext = createContext('gold');
export const moneyContext = createContext(0);
const Grandpa = () => {
    const [money,setMoney] = useState(0)
  
    return (
        <div className='grandpa'>
          <h2>Grandpa</h2>
         <moneyContext.Provider value={[money,setMoney]}>
         <ringContext.Provider value='golden lockect'>
          <section className='flex'>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
          </ringContext.Provider>
         </moneyContext.Provider>
        </div>
    );
};

export default Grandpa;