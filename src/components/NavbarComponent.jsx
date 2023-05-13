import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <>
            <Navbar expand="lg" className="shadow-sm navbar-fixed-top navbar" fixed="top" >
                <Container className="my-1">
                    <Navbar.Brand href="#!"> <strong>React-bootstrap-form</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#form">Formulario</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;