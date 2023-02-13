import { useContext, useEffect, useState } from 'react';
import {AiFillHeart} from 'react-icons/Ai'
import {MdShoppingCart} from 'react-icons/Md'
import {Link} from 'react-router-dom'
import { CarritoContext } from '../contextCarrito/carritoContext';

export const Barra = () => {

    const carritoContext = useContext(CarritoContext)
    const { carrito  } = carritoContext;

    function total(){
        const total = carrito.reduce((acum, item)=>{
            return acum + item.cantidad;
        },0)
        return total;
    }
    const [totalProductos, setTotalProductos] = useState(total());

    useEffect(()=>{
        setTotalProductos(total())
    },[carrito])

    return (
        <div className='container-fluid barra'>
            <div className="row barra py-1">
                <div className="col navbar-left">
                    <ul className='menu'>
                        <Link className='nav-link' to={'/electronica'}>Electronica</Link>
                        <Link className='nav-link' to={'/joyeria'}>Joyeria</Link>
                        <Link className='nav-link' to={'/hombres'}>Hombres</Link>
                        <Link className='nav-link' to={'/mujeres'}>Mujeres</Link>
                    </ul>
                </div>
                <div className="col navbar-right">
                    <input type="text" placeholder='Buscar'/>
                    <button className='boton btn-buscar' placeholder='Buscar'>
                        Buscar
                    </button>
                    <div className='icons-container'>
                        <span className='heart-icon'>
                            <Link className='nav-link' to={'/favoritos'}><AiFillHeart /></Link>
                        </span>
                        <span className='contenedor-carrito'>
                            <div className='numero-items'><span>{totalProductos}</span></div>
                            <div className='cart-icon'>
                                <Link className='nav-link' to={'/carrito'}><MdShoppingCart /></Link>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
