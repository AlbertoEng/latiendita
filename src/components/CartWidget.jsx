import { useContext, useEffect, useState } from 'react';

import {MdShoppingCart} from 'react-icons/Md'
import {Link} from 'react-router-dom'
import { CarritoContext } from '../contextCarrito/carritoContext';

export const CartWidget = () => {

    const carritoContext = useContext(CarritoContext)
    const { carrito  } = carritoContext;

    function total(){
        const total = carrito.reduce((acum, act)=>{
            return acum + act.cantidad;
        }, 0)
        return total;
    }
    const [totalProductos, setTotalProductos] = useState(total());

    useEffect(()=>{
        setTotalProductos(total())
    },[carrito])

    return (
        <span className='contenedor-carrito'>
            <div className='numero-items'><span>{totalProductos}</span></div>
            <div className='cart-icon'>
                <Link className='nav-link' to={'/carrito'}><MdShoppingCart /></Link>
            </div>
        </span>
    )
}
