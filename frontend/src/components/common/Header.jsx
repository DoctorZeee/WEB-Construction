import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Header = () => {
    return (
        <header>
            <div className="container py-3">
                <Navbar expand="lg">
                    <Navbar.Brand href="/" className="logo">
                        <span>Dimas </span>
                        Web
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className="nav-link">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/About" className="nav-link">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="/Services" className="nav-link">
                                Services
                            </Nav.Link>
                            <Nav.Link href="/Projects" className="nav-link">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="/Blogs" className="nav-link">
                                Blogs
                            </Nav.Link>
                            <Nav.Link href="/Contact" className="nav-link">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;