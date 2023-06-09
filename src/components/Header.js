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
import Symbol from '../app/assets/img/JarrettRosterSymbol.png'
import Logo from '../app/assets/img/JarrettRosterLogo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='mx-auto' href='/'>
                <img src={Symbol} alt='jarrett roster symbol' style={{ height: 40, width: 40}}/>
            </NavbarBrand>

            <img src={Logo} alt='logo' className='mx-auto' style={{ height: 40, width: 250, paddingLeft: 20}}/>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="mx-auto" style={{ paddingRight: 310 }} navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-lg' /> about
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-lg' /> projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-lg' /> blog
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-lg' /> contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;