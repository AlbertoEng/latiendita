import React, { useEffect, useReducer } from 'react'
import { CarritoContext } from './carritoContext';
import {carritoReducer} from './carritoReducer'

    // id: '',
    // title: '',
    // precio: 0,
    // cantidad: 0
const cargarCarrito = () => JSON.parse( localStorage.getItem('carrito') )  || [];

export const CarritoProvider = ({children}) => {

    const [ carrito, dispatchCarrito ] = useReducer(carritoReducer,[], cargarCarrito );
    

    // retorna true or flase if exist.
    const existeProductoEnCarrito = ( p )=>{
        const productoExist = carrito.find(( itemProduct )=>{
            return itemProduct.id === p.id
        })  
        return productoExist? true: false;
    }

    const agregarAlCarrito = ( producto )=>{
        
        if(existeProductoEnCarrito( producto )){
            // si existe en carrito actualizar la cantidad
            // if cantidad != 0 actualizar
            if( producto.cantidad > 0){
                const action = {
                    type: '[carrito] actualizar',
                    payload: producto
                }
                dispatchCarrito(action)
            }

            //if cantidad == 0 eliminar el producto
        }else{
            // si no existe en carrito agregar uno nuevo
            const action = {
                type: '[carrito] agregar',
                payload: producto
            }
            dispatchCarrito(action)
        }
    }

    const quitarDelCarrito = ( producto )=>{
        const action = {
            type: '[carrito] eliminar',
            payload: producto
        }
        dispatchCarrito(action)
        
    }

    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    return (
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, quitarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}
