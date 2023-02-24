import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../contextCarrito/carritoContext";
import { ItemCount } from "./ItemCount";

export const ProductoCart = ({ p }) => {


    const [cantidad, setCantidad] = useState(p.cantidad);
    const navigate = useNavigate();
    const carritoContext = useContext(CarritoContext)
    const { carrito, aumentarProductosCarrito, disminuirProductosCarrito, quitarProductoCarrito} = carritoContext;


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


    const handleEliminarProducto = ()=>{
        quitarProductoCarrito(p)
    }


    const handleDetailProduct = (e, id )=>{
        e.stopPropagation();
        return navigate(`/${p._id}`)
    }

    useEffect(()=>{
        const getCantidadCarrito = carrito.find(( itemCarrito )=>{
            return itemCarrito._id === p._id;
        })
        setCantidad(getCantidadCarrito?.cantidad);
    },[carrito])


    return (
        <>
            <div  className="product-cart">
                <div className="d-flex">
                    <div onClick={( e )=>handleDetailProduct(e,p.id)}  className='img-product-cart'>
                        <img src={`${p.imagen}`} alt="" />
                    </div>
                    <div onClick={( e )=>handleDetailProduct(e,p.id)} >
                        <h4 className='px-2 product-cart-title'>{p.title}</h4>
                    </div>
                </div>
                <div className='mx-2 d-flex justify-content-between'>
                    <p className='precio-product-cart'>Precio: <span>${p.precio}</span></p>
                    <ItemCount cantidad={cantidad} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
                </div>
                <button onClick={handleEliminarProducto} className="botonEliminar__carrito">x</button>
            </div>
        </>
    )
}
