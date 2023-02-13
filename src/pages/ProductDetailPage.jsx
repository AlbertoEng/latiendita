import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Barra } from '../components/Barra'
import { Header } from '../components/Header'
import axios from 'axios';
import { Footer } from '../components/Footer';
export const ProductDetailPage = () => {

    const params = useParams()
    const [producto, setProducto] = useState();

    const getProduct = async ( )=>{
        const getProduct =  await axios.get(`http://localhost:3001/api/productos/${params.productoId}`)
        setProducto(getProduct.data);
    }
    
    useEffect(()=>{
        getProduct();
    },[])



    return (
        <div className='home'>
            <Header/>
            <Barra />
            <main className='container-fluid'>
                <div className='contenedor'>
                    <div className="row">
                        <div className='col-12 col-md-6 d-flex justify-content-center'>
                            <img className='imagen-detalle' src={`${producto?.imagen}`} alt="producto" />
                        </div>
                        <div className='col-12 col-md-6'>
                            <h2 className='product-title'>{producto?.title}</h2>
                            <h4 className='product-description'>{producto?.description}</h4>
                            <p className='precio'>Precio: <span>{producto?.precio}</span></p>
                            <p className='categoria'>Categoria: {producto?.categoria}</p>
                            <div>
                                <button  className='boton-agregar-carrito'>Agregar al Carrito</button>
                                <button className='comprar'>Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
