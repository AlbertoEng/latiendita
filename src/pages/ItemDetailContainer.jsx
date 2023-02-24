
import {  Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { ItemDetail } from '../components/ItemDetail';
export const ItemDetailContainer = () => {



    return (
        <div className='home'>
            <Header/>
            <Navbar />
            <main className='container-fluid'>
                <div className='contenedor'>
                    <div className="row">
                        <ItemDetail />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
