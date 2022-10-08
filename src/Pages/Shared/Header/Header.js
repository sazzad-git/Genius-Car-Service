import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/#home">
            <img src={logo} height="30" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/#experts">Experts</Nav.Link>
            {user?.displayName ?
                    <Button onClick={logOut} variant="light">Logout</Button> : 
              <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
              }
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
