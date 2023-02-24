
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ItemList } from '../components/ItemList'
import { Navbar } from '../components/Navbar'

export const Home = () => {

    return (
        <div className='home'>
            <Header />
            <Navbar />
            <main className='container-fluid'>
                <ItemList />
            </main>
            <Footer />
        </div>
    )
}
