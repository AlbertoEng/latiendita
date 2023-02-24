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


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    // revisar que exista producto. true or false
    const existeProducto = (product)=>{
        const result = carrito.find(( itemCarrito)=>{
            return itemCarrito._id === product._id
        })
        return result ? true: false;
    }   

    // verificar que la cantidad del producto sea >= 1
    const productoIgualAUno = ( product )=>{
        if(product.cantidad == 0){
            return true;
        }
        return false;
    }
    

    //agregarlo al carro
    const aumentarProductosCarrito = ( product )=>{
        if(existeProducto(product)){
            // aumentar cantidad
            const action = {
                type: '[carrito] actualizar',
                payload: product
            }
            dispatchCarrito(action);
        }else{
            // agregarlo al carrito
            const action = {
                type: '[carrito] agregar',
                payload: product
            }
            dispatchCarrito(action);
        }
        
    }

    const disminuirProductosCarrito = ( product )=>{

        // if cantidad = 1 hay que borrar el producto
        if(productoIgualAUno( product )){
            const action = {
                type: '[carrito] quitar',
                payload: product
            }
            dispatchCarrito(action)
        }else{
            // si es mayor solo actualizar la cantidad
            const action = {
                type: '[carrito] actualizar',
                payload: product
            }
            dispatchCarrito(action);
        }
    }

    const quitarProductoCarrito = ( product )=>{
        const action = {
            type: '[carrito] quitar',
            payload: product
        }
        dispatchCarrito(action)
    }

    


    return (
        <CarritoContext.Provider value={{carrito, aumentarProductosCarrito, disminuirProductosCarrito, quitarProductoCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}
