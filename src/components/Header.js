import { useState } from "react";
import { 
    Navbar, 
    NavbarBrand, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem 
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import ProfilePic from '../app/assets/img/ProfilePic.png'
import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-2' href='/'>
                <img src={ProfilePic} alt='profile pic' className='float-start'/>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-lg' /> Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
};

export default Header;