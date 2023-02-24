import React from 'react'

export const ItemCount = ({ handleIncrement, handleDecrement,cantidad}) => {

    


    return (
        <div className="d-flex col-6 align-items-center justify-content-between">
            <button onClick={handleIncrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">+</button>
            <p className=" text-center fs-3 " >{cantidad}</p>
            <button onClick={handleDecrement} className="fs-5 border-0 m-1 bg-primary text-white fw-bold rounded">-</button>
        </div>
    )
}
