import React from 'react';
import { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Cousin = ({children}) => {
    const [money,setMoney] = useContext(moneyContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            <p>MOney: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>click me</button>
        </div>
    );
};

export default Cousin;