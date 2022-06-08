import React from 'react';

function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <div className='container'>
        <footer className='footer'>
            <div>
                <p> &copy; {footerYear} . Wszystkie prawa zastrzeżone </p>
            </div>
        </footer>
        </div>
    )
}


export default Footer
