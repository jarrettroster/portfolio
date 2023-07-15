import { Col, Row, Container } from "reactstrap";

const AboutPage = () => {

    return (
        <Container style={{ paddingTop: 50}}>
            <Row className="row-content, text-white">
                <Col sm='12'>
                    <h3>About Me</h3>
                    <p>
                    I am Jarrett, a 32-year-old professional with a unique journey that blends my passion for music business 
                    and my newfound enthusiasm for coding. After completing my education in Music Business during my 20s, 
                    I embarked on a career in the music industry, working with various artists and labels to promote their music. 
                    However, when the COVID-19 pandemic struck, the music industry faced unprecedented challenges, 
                    and I found myself seeking new avenues for growth and inspiration.
                    </p>
                    <p>
                    During this time, I enrolled in a six-month coding bootcamp with Nucamp to pursue my passion for coding. The intensive 
                    program allowed me to dive deep into web development, learning various technologies such as HTML, CSS, JavaScript, 
                    and React. Through hands-on projects and collaborative learning, I gained practical experience and honed my coding skills.
                    </p>
                    <p>
                    My journey through the coding bootcamp was transformative. It not only equipped me with the technical knowledge required 
                    for front-end development but also instilled in me a strong foundation in problem-solving and critical thinking. The bootcamp 
                    fostered an environment of continuous learning, pushing me to expand my coding horizons and develop innovative solutions.
                    </p>
                    <p>
                    Now, armed with my music business background and the skills I acquired during the coding bootcamp, 
                    I am eager to embark on a new career path as a Front-End Developer. I am confident that the knowledge and 
                    experience gained from the bootcamp, coupled with my passion for music, will enable me to bring a 
                    fresh perspective to the intersection of music and technology.
                    </p>
                    <p>
                    I am excited about the possibility of joining Fruition, as it aligns perfectly with my aspirations for professional 
                    growth and the opportunity to further perfect my craft. The collaborative and supportive work environment that 
                    Fruition fosters is exactly what I am seeking to thrive and continue expanding my skills as a Front-End Developer.
                    </p>
                    <p>
                    With a solid foundation in both music business and coding, a transformative journey through a 
                    coding bootcamp, and an unwavering commitment to learning, I am ready to make a significant impact at 
                    Fruition and contribute to the dynamic and innovative projects the company undertakes.
                    </p>
                    <p>
                    Outside of work, I find joy in playing guitar, composing music, and attending live performances. These experiences 
                    have shaped me into a well-rounded individual with a deep appreciation for the intersection of artistry and technology. 
                    I am excited about the possibilities that lie ahead and the chance to combine my passion for music with 
                    my growing expertise in web development.
                    </p>
                    <p>
                    I am grateful for the opportunity to be considered for a role at Fruition and look forward to discussing
                     in more detail how my unique background and coding journey can contribute to the company's success.

                    Sincerely,
                    Jarrett
                    </p>
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