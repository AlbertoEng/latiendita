import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { ItemCount } from './ItemCount';
import { CarritoContext } from '../contextCarrito/carritoContext';

export const ItemDetail = () => {

    const params = useParams()
    const [producto, setProducto] = useState();
    const [cantidad, setCantidad] = useState();
    const navigate = useNavigate();
    const carritoContext = useContext(CarritoContext)
    const { carrito, aumentarProductosCarrito, disminuirProductosCarrito } = carritoContext;



    const handleIncrement = ()=>{
        setCantidad(cantidad + 1)
        aumentarProductosCarrito({...producto, cantidad: cantidad +1})
    }
    const handleDecrement = ()=>{
        
        if( cantidad == 0 ){
            return;
        }
        setCantidad(cantidad-1)
        disminuirProductosCarrito({...producto, cantidad: cantidad-1})
    }

    const getProduct = async ( )=>{
        const getProduct =  await axios.get(`http://localhost:3001/api/productos/${params.productoId}`)
        setProducto(getProduct.data);
    }

    const handleComprar = ()=>{
        if(cantidad == 0){
            handleIncrement();
        }
        navigate('/carrito')
    }
    
    useEffect(()=>{
        getProduct();
        const getCantidadCarrito = carrito.find(( item )=>{
            return item._id === params.productoId;
        })
        setCantidad(getCantidadCarrito.cantidad || 0 ) ;
    },[])



    return (
        <>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img className='imagen-detalle' src={`${producto?.imagen}`} alt="producto" />
            </div>
            <div className='col-12 col-md-6'>
                <h2 className='product-title'>{producto?.title}</h2>
                <h4 className='product-description'>{producto?.description}</h4>
                <p className='precio'>Precio: <span>{producto?.precio}</span></p>
                <p className='categoria'>Categoria: {producto?.categoria}</p>
                <ItemCount cantidad={cantidad}  handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
                <div>
                    <button   className='boton-agregar-carrito'>Agregar al Carrito</button>
                    <button onClick={handleComprar} className='comprar'>Comprar</button>
                </div>
            </div>
        </>
    )
}
