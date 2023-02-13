import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Barra } from '../components/Barra'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Producto } from '../components/Producto'

export const JoyeriaPage = () => {


    const [productos, setProductos] =  useState([]);



    const getProducts = async()=>{
        const lista = await axios.get('http://localhost:3001/api/productos/categoria/joyeria')
        setProductos(lista.data);
    }
    

    useEffect(()=>{
        getProducts();
        console.log(productos)
    },[])




    return (
        <div className='home'>
            <Header />
            <Barra />
            <main className='container-fluid'>
                <div className='contenedor'>
                    {
                        productos.length > 0? productos.map(( p ) => (
                            <Producto key={p._id}  p={p}/>
                        ))
                        : <div className="spinner-border spinner" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}