import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { HombresPage } from './pages/HombresPage'
import { MujeresPage } from './pages/MujeresPage'
import { JoyeriaPage } from './pages/JoyeriaPage'
import { CarritoPage } from './pages/CarritoPage'
import {ElectronicaPage} from './pages/ElectronicaPage'
import { ProductDetailPage } from './pages/ProductDetailPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hombres' element={<HombresPage/>} />
        <Route path='/mujeres' element={<MujeresPage/>} />
        <Route path='/joyeria' element={<JoyeriaPage/>} />
        <Route path='/electronica' element={<ElectronicaPage/>} />
        <Route path='/carrito' element={<CarritoPage />} />
        <Route path='/:productoId' element={<ProductDetailPage/>}/>
        <Route path='/*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
