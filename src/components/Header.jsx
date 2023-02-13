import {FaUserAlt} from 'react-icons/Fa'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="container-fluid header">
        <div className='row '>
            <Link to={'/'} className="nav-link col-12 col-md-6 col-lg-8 col-xl-9 texto-marca px-5"><h1>TiendaDigital</h1></Link>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 texto-bienvenido">
                <button className='container-saludo'>
                    <p className='texto-saludo'>Hola, <span>Jesus Eng</span> <span className='user-icon'><FaUserAlt/></span></p>
                </button>
            </div>
        </div>
    </div>
  )
}
