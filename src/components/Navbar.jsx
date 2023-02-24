
import {AiFillHeart} from 'react-icons/Ai'
import {Link} from 'react-router-dom'
import { CartWidget } from './CartWidget';

export const Navbar = () => {

    

    return (
        <nav className='container-fluid barra'>
            <div className="row barra py-1">
                <div className="col navbar-left">
                    <ul className='menu'>
                        <Link className='nav-link' to={'/categories/electronica'}>Electronica</Link>
                        <Link className='nav-link' to={'/categories/joyeria'}>Joyeria</Link>
                        <Link className='nav-link' to={'/categories/hombre'}>Hombres</Link>
                        <Link className='nav-link' to={'/categories/mujer'}>Mujeres</Link>
                    </ul>
                </div>
                <div className="col navbar-right">
                    <input type="text" placeholder='Buscar'/>
                    <button className='boton btn-buscar' placeholder='Buscar'>
                        Buscar
                    </button>
                    <div className='icons-container'>
                        <span className='heart-icon'>
                            <Link className='nav-link' to={'/favoritos'}><AiFillHeart /></Link>
                        </span>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}
