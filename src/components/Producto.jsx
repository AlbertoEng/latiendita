import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../contextCarrito/carritoContext";

export const Producto = ({ p }) => {


    const [cantidad, setCantidad] = useState(0);
    const navigate = useNavigate();
    const carritoContext = useContext(CarritoContext)
    const { carrito, agregarAlCarrito, quitarDelCarrito } = carritoContext;


    useEffect(()=>{
        if(cantidad > 0){
            agregarAlCarrito({
                id: p._id,
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

    const handleComprar = ()=>{
        if(cantidad == 0){
            agregarAlCarrito({
                id: p._id,
                cantidad: 1,
                title: p.title,
                imagen: p.imagen,
                precio: p.precio
            })
        }
        navigate('/carrito')
    }

    const handleDetailProduct = (e, id )=>{
        e.stopPropagation();
        return navigate(`/${id}`)
    }


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
                    <div className="d-flex col-6">
                        <button onClick={handleIncrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">+</button>
                        <input onChange={handleChangeCantidad} className="border text-center fs-5" type="text" value={cantidad} />
                        <button onClick={handleDecrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">-</button>
                    </div>
                </div>
                <div className='botones-comprar'>
                    <button onClick={handleIncrement} className='boton-agregar-carrito'>Agregar al Carrito</button>
                    <button onClick={handleComprar} className='boton-comprar'>Comprar</button>
                </div>
            </div>
        </>
    )
}
