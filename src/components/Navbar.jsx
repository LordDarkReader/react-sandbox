import React from 'react';


function Navbar() {

    return (<div className='header2' style={{height: '500px' }}>
            <div>
                <a  href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white' }}>
                    Zarządzanie kontem firmy
                </a>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
                    Raporty
                </a>
            </div>
        </div>

    )
}


export default Navbar
