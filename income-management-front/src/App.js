// React
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { state, useState } from 'react'

// Component
import Topnav from './components/Topnav'
import Home from './components/Home'
import Manage from './components/Manage'
import Login from './components/Login'
import Info from './components/Info'
import Intro from './components/Intro'
import Footer from './components/Footer'
import AddIncome from './components/AddIncome'
import Asset from './components/Asset'

// Bootstrap
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isIncomeOpen, setIsIncomeOpen] = useState(false)
    const[isLogin, setIsLogin] = useState(false)

    return (

    <div className="App d-flex flex-column min-vh-100">
        <Router>

            <Topnav
                isLoginOpen = { isLoginOpen }
                setIsLoginOpen = {setIsLoginOpen}
            />

            <Routes>
                <Route path="/" element={
                    isLogin ?  
                    <Intro/>:
                    <Home isIncomeOpen={isIncomeOpen} setIsIncomeOpen={setIsIncomeOpen}/>
                }/>
                <Route path='/manage' element={ <Manage/> }/>
                <Route path='login' element={ <Login/> }/>
                <Route path='/info' element={ <Info/>}/>
                <Route path='assset' element={ <Asset/> }/>
            </Routes>

            <Footer/>

        </Router>


        <Modal
            className="mt-5"
            show={isLoginOpen}
        >
            <Login
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
                setIsLogin={setIsLogin}
            />
        </Modal>

        <Modal
            className="mt-5"
            show={isIncomeOpen}
        >
            <AddIncome
                setIsIncomeOpen={setIsIncomeOpen}
            />
        </Modal>

    </div>

    );
}

export default App;