import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Heading() {

    const deleting = () => {
        localStorage.clear();
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container bg="dark">
                <Navbar.Brand>Team 1 - Bismillah Selesai</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/item">Item</Nav.Link>
                        <Nav.Link onClick={() => deleting()} href="/login">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Heading