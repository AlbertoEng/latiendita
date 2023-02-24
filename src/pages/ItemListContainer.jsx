import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Item } from '../components/Item';
import { Footer } from '../components/Footer';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const params = useParams();

    
    const getProducts = async ()=>{
 
        const productsList = await axios.get(`http://localhost:3001/api/productos/categoria/${params.categoriesId}`);
        setProducts(productsList);
        
    }

    useEffect(()=>{
        getProducts();
    }, [params])

    return (
        <div className='home'>
            <Header />
            <Navbar />
            <main className='container-fluid'>
                <div className='contenedor'>
                    {
                        products.data ? products.data.map(( p ) => (
                            <Item key={p._id}  p={p}/>
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
