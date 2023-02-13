
export const carritoReducer = ( state = [], action)=>{
    switch( action.type ){

        case '[carrito] agregar':
            return [...state, action.payload];
        case '[carrito] actualizar':
            return state.map(( item )=>{
                if(item.id == action.payload.id){
                    const productoActualizado = {
                        id: item.id,
                        cantidad: action.payload.cantidad,
                        title: action.payload.title,
                        imagen: action.payload.imagen,
                        precio: action.payload.precio
                    }
                    return productoActualizado;
                }
                return item;
            });

        case '[carrito] eliminar':
            console.log(action.payload)
            return state.filter(( item )=>{
                return item.id !== action.payload._id
            })

        default: 
            return state;
    }
}