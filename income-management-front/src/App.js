import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Topnav from './components/Topnav'
import Home from './components/Home'
import Manage from './components/Manage'
import Login from './components/Login'
import Info from './components/Info'

function App() {
    return (

    <div className="App">
        <Router>

            <Topnav/>

            <Routes>
                <Route path='/' element={ <Home/>} />
                <Route path='/manage' element={ <Manage/> }/>
                <Route path='login' element={ <Login/> }/>
                <Route path='/info' element={ <Info/>}/>
            </Routes>

        </Router>
    </div>

    );
}

export default App;