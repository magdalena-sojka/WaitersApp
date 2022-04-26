import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div>
      <Navbar bg="primary" variant="dark" className="border rounded mt-4">
        <Container>
          <Navbar.Brand href="/">WaiterApp</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;