import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from './assets/logo.png';
import help from './assets/help.png';
import close from './assets/close.png';
import contrast from './assets/contrast.png';


function Navbar2() {

    return (
        <Navbar variant="dark" style={{background: `rgba(10,220,153,1)`, height: '80px' }}  expand="xl">
            <Container fluid>

                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Zarządzanie kontem firmy"
                            menuVariant="light"
                        >
                            <NavDropdown.Item href="#action/3.1">Pakiety</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Usługi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Dektywacja numeru</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Limit Plus</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example2">
                    <Nav>
                        <NavDropdown
                            id="nav-dropdown-dark-example2"
                            title="Raporty"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1" >Zestawienie szczegółowe</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">HotBilling</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Billing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Zużycie</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <button style={{border: '0', background: 'transparent'}}><img width='135px' src={contrast}/></button>
                <button style={{border: '0', background: 'transparent'}}><img width='92px' src={help}/></button>
                <button style={{border: '0', background: 'transparent'}}><img width='104px' src={close}/></button>
            </Container>
        </Navbar>

    )
}


export default Navbar2
