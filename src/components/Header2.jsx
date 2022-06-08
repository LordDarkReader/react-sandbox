import React from 'react';
import logo from './assets/logo.png';
import customer from './assets/customerName.png';
import logoPlus from './assets/logoPlus.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Header2() {


    return (
        <Container fluid={true}>
            <Row>
                <Col xl><img  src={logo}/></Col>
                <Col xl><img  src={customer}/></Col>
                <Col xl><img style={{marginLeft: 520}} width='125px' src={logoPlus}/></Col>
            </Row>
        </Container>
    )
}


export default Header2
