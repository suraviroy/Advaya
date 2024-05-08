import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './navbar.css'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbare() {
    const Navigate = useNavigate();
    function handleClick(){
        Navigate("/feedback")
    }
    function handleClick111(){
        Navigate("/")
    }
    function handleClickkk(){
        Navigate("/feed")
    }
    function handleClickkk22(){
        Navigate("/hubs")
    }
    function handleClickkk33(){
        Navigate("/player")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='navy'>
                    <div className='logo'><img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1677935337/No_starve__2_-removebg-preview_yv01rg.png" width="40" height="40" alt="" /></div>
                    <div className='name'> <Navbar.Brand href="#home"> Advaya</Navbar.Brand></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleClick111}>Home</Nav.Link>
                            <Nav.Link onClick={handleClick}>Feedback</Nav.Link>
                            <Nav.Link onClick={handleClickkk}>Skills</Nav.Link>
                            <NavDropdown title="More Info" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleClickkk33}>About Us</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleClickkk22}>Hubs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Our Service
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='signbutton'>
                <div className='b1'><a href='/signup'><Button variant="primary">Sign Up</Button> </a>{' '}</div>
                <div className='b2'><a href='/login'> <Button variant="success">Log In</Button></a>{' '}</div>
                <div className='b3'><a href='/12365478911'> <Button variant="warning">Admin</Button></a>{' '}</div>
                </div>
            </Container>
        </Navbar>
    )
}
export default Navbare;