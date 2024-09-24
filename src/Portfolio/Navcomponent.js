import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import './folio.css'; // Add your custom CSS file here

const MyComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    return (
        <>
            

            <Navbar expand="lg" className="mb-3" style={{maxHeight:"8vh"}} >
                <Container fluid>
                <Button className="sk-button" onClick={handleShow}>
                SK
                </Button>
                    {/* Navbar Toggle Button (Visible on mobile) */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-lg-none " onClick={handleShow} />

                    {/* Navbar Content (Visible on larger screens) */}
                    <Navbar.Collapse id="offcanvasNavbar" className="d-flex justify-content-end ">
                        <Nav className='navbarwords'>
                        <Nav.Link className="nav-link-custom" href="/Home">Home</Nav.Link>
                                <Nav.Link className="nav-link-custom" href="/About">About</Nav.Link>
                                <Nav.Link className="nav-link-custom" href="/Skills">Skills</Nav.Link>
                                {/* <Nav.Link className="nav-link-custom" href="/projects">Projects</Nav.Link> */}
                                <Nav.Link className="nav-link-custom" href="Contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Offcanvas Menu (Visible on mobile) */}
                    <Offcanvas 
                        show={showOffcanvas} 
                        onHide={handleClose} 
                        placement="start"
                        className="d-lg-none Toggleright"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column">
                                <Nav.Link className="nav-link-custom" href="/Home">Home</Nav.Link>
                                <Nav.Link className="nav-link-custom" href="/About">About</Nav.Link>
                                <Nav.Link className="nav-link-custom" href="/Skills">Skills</Nav.Link>
                                {/* <Nav.Link className="nav-link-custom" href="/projects">Projects</Nav.Link> */}
                                <Nav.Link className="nav-link-custom" href="/Contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default MyComponent;
