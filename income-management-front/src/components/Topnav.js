import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaUserCircle  } from 'react-icons/fa'

import { useState } from 'react' 

const Topnav = () => {

    const [currentPage, setCurrentPage] = useState(0);

    return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>               

        <a className='navbar-brand ps-5 pe-5' href='/'>🐱 박고양</a>

        <button className="navbar-toggler flex-row-reverse" type="button" data-toggle="collapse" 
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/manage">수입관리</a>
                <a className="nav-item nav-link" href="/info">부업정보</a>
                </div>
        </div>

        <div className='nav navbar-nav ps-5 pe-5'>            
            <a href='/login'>
                <FaUserCircle color='white' fontSize='1.5em'/>
            </a>
        </div>

    </nav>
    )
}

export default Topnav