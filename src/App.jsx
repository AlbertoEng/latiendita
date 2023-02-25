import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CarritoPage } from './pages/CarritoPage'
import { ItemDetailContainer } from './pages/ItemDetailContainer'
import { ItemListContainer } from './pages/ItemListContainer'
import { PagoPage } from './pages/PagoPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/hombres' element={<HombresPage/>} />
        <Route path='/mujeres' element={<MujeresPage/>} />
        <Route path='/joyeria' element={<JoyeriaPage/>} />
        <Route path='/electronica' element={<ElectronicaPage/>} /> */}
        <Route path='/categories/:categoriesId' element={<ItemListContainer />} />
        <Route path='/carrito' element={<CarritoPage />} />
        <Route path='/carrito/pagar' element={<PagoPage />} />
        <Route path='/:productoId' element={<ItemDetailContainer/>}/>
        <Route path='/*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
