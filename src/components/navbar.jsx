import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import NavbarBG from '../assets/e.png';
import Icn from '../assets/Icon.png';
const CustomNavbar = 
() => {

return  <Navbar variant="dark" style={ { backgroundRepeat: "no-repeat"  , objectFit : "cover" , backgroundSize : "100%" ,  backgroundImage : `url(${NavbarBG})`} } >
<Container>
  <Navbar.Brand href="#home">
    <img width="75%" height="75%" src={Icn}></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Button variant="warning" className="me-3 fw-bold pt-2 pb-2 ps-2 pe-2">Login</Button>
    <Button className="fw-bold pt-2 pb-2 ps-2 pe-2" variant="outline-warning">Signup</Button>
  </Navbar.Collapse>
</Container>
</Navbar>

}





export default CustomNavbar ; 