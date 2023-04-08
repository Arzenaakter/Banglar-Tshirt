import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
           <h1>Father</h1>
        <section className='flex'>
        <Myself></Myself>
           <Brother></Brother>
           <Sister></Sister>
        </section>
        </div>
    );
};

export default Father;