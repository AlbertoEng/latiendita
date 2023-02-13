import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../contextCarrito/carritoContext";

export const ProductoCart = ({ p }) => {


    const [cantidad, setCantidad] = useState(p.cantidad);
    const navigate = useNavigate();
    const carritoContext = useContext(CarritoContext)
    const { carrito, agregarAlCarrito, quitarDelCarrito } = carritoContext;


    useEffect(()=>{
        if(cantidad > 0){
            agregarAlCarrito({
                id: p.id,
                cantidad: cantidad,
                title: p.title,
                imagen: p.imagen,
                precio: p.precio
            })
        }else{
            quitarDelCarrito(p)
        }
    },[cantidad])


    const handleIncrement = ()=>{
        setCantidad(cantidad + 1)
    
    }
    const handleDecrement = ()=>{
        if( cantidad == 0 ){
            agregarAlCarrito({
                id: p._id,
                cantidad: cantidad,
                title: p.title,
                imagen: p.imagen,
                precio: p.precio
            })
            return;
        }
        setCantidad(cantidad-1)

    }

    const handleChangeCantidad = ( e )=>{
        const valor =  e.target.value
        setCantidad(Number(valor) + 1)

    }


    const handleDetailProduct = (e, id )=>{
        e.stopPropagation();
        return navigate(`/${id}`)
    }


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
                    <div className="d-flex col-6">
                        <button onClick={handleIncrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">+</button>
                        <input onChange={handleChangeCantidad} className="border text-center fs-5 p-1" type="text" value={cantidad} />
                        <button onClick={handleDecrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
