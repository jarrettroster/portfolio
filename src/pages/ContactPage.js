import { Container, Col, Row } from "reactstrap";

const ContactPage = () => {
    return (
        <Container>
                <Row className='row-content align-items-center'>
                    <Col sm='6'>
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
        </Container>
        )
};

export default ContactPage;