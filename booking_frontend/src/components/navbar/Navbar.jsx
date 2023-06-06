import React, { useState } from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import {Link} from "react-router-dom";
import './Navbar.css'
const MyComponent = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleClose1 = () => setModalShow1(false);

    return (
        <>
            <Navbar collapseOnSelect className={"navbarz mb-1"} expand="lg" style={{backgroundImage: "linear-gradient( black,#0c0c0c)"}} variant="dark">
                <Container>
                    <Link to="/">
                    <Navbar.Brand >Ticket Maestro's</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Events</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link
                                href="#deets"
                                onClick={() => setModalShow(true)}
                            >
                                Register
                            </Nav.Link>
                            <Nav.Link eventKey={2} href=""
                                    onClick={() => setModalShow1(true)}

                            >

                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal show={modalShow1} handleClose={handleClose1} />
            <RegisterModal show={modalShow} handleClose={handleClose} />
        </>
    );
};

export default MyComponent;