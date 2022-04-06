import React, { useState } from "react";
// import PropTypes from "prop-types";
import style from "./Navbar.module.scss";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
// Si on veut les styles en global, on les met dans public/index.html
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
// const initialState = {};

const Navbar = (props) => {
  // const [state, setstate] = useState(initialState);
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};
Navbar.propTypes = {};
Navbar.defaultProps = {};
export default Navbar;