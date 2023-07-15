import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container>
                <Row className='row-content align-items-center'>
                    <Col sm='4'>
                        <h5>My Address</h5>
                        <address>
                            Coming soon to Lakewood, CO!
                            <br />
                            U.S.A.
                        </address>
                    </Col>
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+13038836084'
                        >
                            <i className='fa fa-phone' /> 303-883-6084
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:jarrettroster@protonmail.com'
                        >
                            <i className='fa fa-envelope-o' /> jarrettroster@protonmail.com
                        </a>
                    </Col>
                </Row>
                <Row className='row-content'>
                    <Col xs='12'>
                        <h2>Send Me Your Feedback</h2>
                        <hr />
                    </Col>
                    <Col md='10'>
                        <ContactForm />
                    </Col>
                </Row>
        </Container>
        )
};

export default ContactPage;