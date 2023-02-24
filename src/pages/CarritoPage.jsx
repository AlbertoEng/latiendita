
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Checkout } from '../components/Checkout'


export const CarritoPage = () => {

    

    return (
        <div className='home'>
            <Header />
            <Navbar />
            <main className='container container-carrito'>
                <Checkout />
            </main>
            <Footer />
        </div>
    )
}