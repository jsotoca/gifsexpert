import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: imgs, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {loading && <p>loading</p>}
            <div className="card-grid">
                { 
                    imgs.map( i => <GifGridItem key={i.id} {...i} />)
                }
            </div>
        </>
    );
}
