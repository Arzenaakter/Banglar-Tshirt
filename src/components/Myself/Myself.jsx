import React from 'react';
import { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';
import Special from '../Special/Special';

const Myself = () => {
    const ring = useContext(ringContext);
    return (
        <div>
            <h2>Myself</h2>
            {ring}
            <Special></Special>
        </div>
    );
};

export default Myself;