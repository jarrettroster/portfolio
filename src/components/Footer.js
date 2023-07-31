import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='site-footer'> 
            <Container>
                <Row>
                    <Col xs={{ size: 4 }} sm='6' className='mx-auto text-white'>
                        <ul className='list-inline text-white d-flex'>
                            <li>
                                <Link className= 'text-white px-1 px-md-3' to='/'> about </Link>
                            </li>
                            <li>
                                <Link className= 'text-white px-1 px-md-3' to='/projects'> projects </Link>
                            </li>
                            <li>
                                <Link className= 'text-white px-1 px-md-3' to='/about'> blog </Link>
                            </li>
                            <li>
                                <Link className= 'text-white px-0 px-md-3' to='/contact'> contact </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm='6' className='text-center'>
                    <a
                            role='button'
                            className='btn btn-link text-white'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-303-883-6084
                        </a>
                        <a
                            role='button'
                            className='btn btn-link text-white'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> jarrettroster@protonmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )}

export default Footer;