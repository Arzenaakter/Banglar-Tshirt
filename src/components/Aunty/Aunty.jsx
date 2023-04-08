import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
           <h2>Aunty</h2>
           <section className='flex'>
           <Cousin>abir</Cousin>
            <Cousin>momena</Cousin>
           </section>
        </div>
    );
};

export default Aunty;