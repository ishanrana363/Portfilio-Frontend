
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>

            <Header></Header>
            <div className="" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
