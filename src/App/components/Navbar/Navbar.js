import React from "react";
import style from "./Navbar.module.scss";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// Si on veut les styles en global, on les met dans public/index.html
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
// const initialState = {};

const Navbar = (props) => {
  // const [state, setstate] = useState(initialState);
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Net-Concept Meme Generator</NavBar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/thumbnail"><Nav.Link >Thumbnails</Nav.Link></LinkContainer>
            <LinkContainer to="/editor"><Nav.Link >New Meme</Nav.Link></LinkContainer>
            <LinkContainer to="/listpdf"><Nav.Link >Liste PDF</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
