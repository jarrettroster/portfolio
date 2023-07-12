import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='site-footer'> 
            <Container>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
                    <Col xs='6' sm='3' className='mx-auto text-white'>                        
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='http://www.linkedin.com/in/jarrett-roster-459985268/'
                        >
                            <i className='fa fa-linkedin' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-github'
                            href='http://github.com/jarrettroster/'
                        >
                            <i className='fa fa-github' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='3' className='text-center'>
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