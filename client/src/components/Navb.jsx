import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Container';
import ProductCard from "./Product";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navb=()=>{
    const cartItems = useSelector((state)=> state.cart.cart);
    const totalIteams = cartItems.reduce((total , item) => total + (item.qnty))
    const navigate = useNavigate();

    const handleCartClick =()=>{
         navigate('/cart')
    };

    return(
            <>
            <Navbar >
                 <Container>
                 <Navbar.Brand onclick={()=>navigate('/')} >
                    Features

                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls = "navbar-nav"/>
                    <Navbar.Collapse className="link">
                        <Nav className="ms-auto nav-links">
                            <Nav.Link onClick={()=>navigate('/')} ></Nav.Link>
                            <Nav.Link href="pricing"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Container>
                        
            </Navbar>
         </>


    )
}