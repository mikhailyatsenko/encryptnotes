import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Encrypt notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/">
                Главная
              </NavLink>
              <NavLink className="nav-link" to="/create">
                Создать
              </NavLink>
              <NavLink className="nav-link" to="/note">
                Расшифровать
              </NavLink>
              <NavLink className="nav-link" to="/about">
                О проекте
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
