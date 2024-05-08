import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './navvv.css'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navvv() {
    const Navigate = useNavigate();
    function handleClick(){
        Navigate("/feedback")
    }
    function handleClick111(){
        Navigate("/")
    }
    function handleClick222(){
        Navigate("/feed")
    }
    function handleClick333(){
        Navigate("/hubs")
    }
    function handleClick444(){
        Navigate("/player")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='navy006'>
                    <div className='logo006'><img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1677935337/No_starve__2_-removebg-preview_yv01rg.png" width="40" height="40" alt="" /></div>
                    <div className='name006'> <Navbar.Brand href="#home"> Advaya</Navbar.Brand></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav006">
                        <Nav className="me-auto006">
                            <Nav.Link onClick={handleClick111}>Home</Nav.Link>
                            <Nav.Link onClick={handleClick}>Feedback</Nav.Link>
                            <Nav.Link onClick={handleClick222}>Skills</Nav.Link>
                            <NavDropdown title="More Info" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleClick444}>About Us</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleClick333}>Hubs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Our Service
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
export default Navvv;