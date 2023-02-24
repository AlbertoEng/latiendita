
export const carritoReducer = ( state = [], action)=>{
    switch( action.type ){

        case '[carrito] agregar':
            return [...state, action.payload];

        case '[carrito] quitar':
            return state.filter(( itemCarrito)=>{
                return itemCarrito._id !== action.payload._id
            })
            
        case '[carrito] actualizar':
            return state.map(( itemCarrito )=>{
                if(itemCarrito._id === action.payload._id){
                    const nuevoProduct = {
                        ...itemCarrito,
                        cantidad: action.payload.cantidad
                    }
                    return nuevoProduct;
                }
                return itemCarrito;
            });


        default: 
            return state;
    }
}