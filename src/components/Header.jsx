import React from 'react';
import logo from './assets/logo.png';
import customer from './assets/customerName.png';
import logoPlus from './assets/logoPlus.png';

function Header() {


    return (
        <div className='container'>
            <div>
                <div className='header1'>
                    <img  src={logo}/>
                    <img  src={customer}/>
                    <img style={{marginLeft: 520}} width='125px' src={logoPlus}/>
                </div>
            </div>
        </div>)
}


export default Header
