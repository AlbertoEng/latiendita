import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../contextCarrito/carritoContext";
import { ItemCount } from "./ItemCount";

export const Item = ({ p }) => {


    const [cantidad, setCantidad] = useState(0);
    const navigate = useNavigate();
    const carritoContext = useContext(CarritoContext)
    const { carrito, aumentarProductosCarrito, disminuirProductosCarrito } = carritoContext;




    const handleIncrement = ()=>{
        setCantidad(cantidad + 1)
        aumentarProductosCarrito({...p, cantidad: cantidad +1})
    }
    const handleDecrement = ()=>{
        
        if( cantidad == 0 ){
            return;
        }
        setCantidad(cantidad-1)
        disminuirProductosCarrito({...p, cantidad: cantidad-1})
    }

    const handleComprar = ()=>{
        if(cantidad == 0){
            handleIncrement();
        }
        navigate('/carrito')
    }

    const handleDetailProduct = (e, id )=>{
        e.stopPropagation();
        return navigate(`/${id}`)
    }

    useEffect(()=>{
        const  getCantidadCarrito = carrito.find(( itemCarrito)=>{
            return itemCarrito._id === p._id;
        })

        setCantidad( getCantidadCarrito?.cantidad || 0);
    }, [])

    return (
        <>
            <div  className="producto px-0 col-12 col-md-6 col-lg-4">
                <div onClick={( e )=>handleDetailProduct(e,p._id)}  className='img-container'>
                    <img src={`${p.imagen}`} alt="" />
                </div>
                <div onClick={( e )=>handleDetailProduct(e,p._id)} >
                    <h4 className='px-2 product-title'>{p.title}</h4>
                    <p className='p-2 product-description'>{p.description}</p>
                </div>
                <div className='mx-2 d-flex justify-content-between mb-2'>
                    <p className='precio col-6'>Precio: <span>${p.precio}</span></p>
                    <ItemCount 
                        handleIncrement={handleIncrement}  
                        handleDecrement={handleDecrement}
                        cantidad={cantidad}
                    />
                </div>
                <div className='botones-comprar'>
                    <button onClick={handleIncrement} className='boton-agregar-carrito'>Agregar al Carrito</button>
                    <button onClick={handleComprar} className='boton-comprar'>Comprar</button>
                </div>
            </div>
        </>
    )
}
