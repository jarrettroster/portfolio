import { Col, Row, Container } from "reactstrap";

const AboutPage = () => {

    return (
        <Container style={{ paddingTop: 50}}>
            <Row className="row-content, text-white">
                <Col sm='12'>
                    <h3>About Me</h3>
                    <h4>
                    I am Jarrett, a 32-year-old professional blending a passion for music business with newfound enthusiasm for coding.
                     After studying Music Business, I pursued a career promoting artists and labels. However, the COVID-19 pandemic 
                     led me to seek new avenues for growth. I enrolled in a transformative six-month coding bootcamp with Nucamp, 
                     diving into web development and honing my skills in HTML, CSS, JavaScript, and React. Now, armed with music industry 
                     experience and coding expertise, I aspire to be a Front-End Developer, bringing a fresh perspective to the intersection of 
                     music and technology. I am eager to contribute to dynamic and innovative web development projects, combining my passion for 
                     music with growing technical proficiency. Outside of work, I enjoy playing guitar, 
                    composing music, and attending live performances, fostering a well-rounded appreciation for artistry and technology. 
                    </h4>
                </Col>
                {/* <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>
                                    I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer classname='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col> */}
            </Row>
        </Container>
    );
};

export default AboutPage;