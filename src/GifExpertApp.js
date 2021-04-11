import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['one puch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr/>
            <ol>
                { categorias.map( categoria => 
                    <GifGrid 
                        key={ categoria } 
                        category={ categoria } 
                    />
                )}
            </ol>
        </>
    );
};

export default GifExpertApp;