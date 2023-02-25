import React, { useEffect, useState } from 'react'
import { Item } from './Item';
import axios from 'axios'

export const ItemList = () => {

    
    const [productos, setProductos] =  useState([]);

    const getProducts = async()=>{
        const lista = await axios.get('http://localhost:3001/api/productos')
        setProductos(lista.data);
    }

    useEffect(()=>{
        getProducts();
    },[])



    return (
        <div className='contenedor'>
            {
                productos.length > 0 ? productos.map(( p ) => (
                    <Item key={p._id}  p={p}/>
                ))
                : <div className="spinner-border spinner" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    )
}
