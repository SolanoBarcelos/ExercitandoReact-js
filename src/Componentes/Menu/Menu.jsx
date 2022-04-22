import React from "react"
import './Menu.css';
// import { Container } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu() {
    return(

        <div>

            <nav id="menu">
                <Link id="link" to="/">Inicio</Link>  {"  "}
                <Link id="link" to="cores">Cores</Link>  {"  "}
                <Link id="link" to="pokeApi">PokeAPI</Link>  {"  "}
            
            </nav>

            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="me-auto">
                                <Nav.Link href="cores">Cores</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </div>
    );
}