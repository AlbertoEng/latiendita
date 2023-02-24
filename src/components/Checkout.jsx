import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ProductoCart } from '../components/ProductoCart'
import { CarritoContext } from '../contextCarrito/carritoContext'
import {currencyFormatter} from 'currency-formatter'

export const Checkout = () => {

    const {carrito, aumentarProductosCarrito, disminuirProductosCarrito} = useContext(CarritoContext);
    const [productos, setProductos] =  useState([]);
    const [subtotal, setSubtotal] = useState(0);

    


    const getProducts = ()=>{
        setProductos(carrito);
    }

    const getPrecios = ()=>{
        const res = carrito.reduce(( acum, item)=>{
            return acum + (item.precio * item.cantidad);
        },0)
        setSubtotal(res);
    }

    


    useEffect(()=>{
        getProducts();
        getPrecios();
    },[carrito])

    return (
        <>
            <section className='section-pagar-right'>
                <div className='section-pagar-cart'>
                    <p className='d-flex justify-content-between'>Subtotal: <span>{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(subtotal)} MXN</span></p>
                    <p className='d-flex justify-content-between'>IVA: <span>{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(subtotal*0.16)} MXN</span></p>
                    <p className='d-flex justify-content-between'>Total: <span>{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(subtotal*1.16)} MXN</span></p>
                    <button>Pagar</button>
                </div>
            </section>
            <section className='section-lista-carrito'>
                {
                    productos.length > 0? productos.map(( p ) => (
                        <ProductoCart key={p.id}  p={p}/>
                    ))
                    : <h4 className=' mt-5'>Sin Productos en el carrito</h4>
                }
            </section>
        </>
    )
}
