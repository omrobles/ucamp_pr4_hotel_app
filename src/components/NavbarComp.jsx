import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from "react-router-dom";
import logo from "../media/Zen_Hotel_LogoBlack.png"
import "./NavBarComp.css"

function NavBar(){
    return(
        <div>
            <Navbar className="navBar" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>
                    <img 
                    src={logo}
                    alt="Logo"
                    width="180"
                    height="70"
                    className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/habitaciones"}>Habitaciones</Nav.Link>
                    <Nav.Link as={Link} to={"/actividades"}>Actividades</Nav.Link>
                    <Nav.Link as={Link} to={"/servicios"}>Servicios</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar