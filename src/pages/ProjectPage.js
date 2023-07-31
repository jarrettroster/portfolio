import { Col, Container, Row, Card, CardBody, CardHeader } from "reactstrap";
import PassagePic from '../app/assets/img/Passage .jpg';
import MeekndLowlyPic from '../app/assets/img/MeekNdLowly Page.png';
import WebsitePortfolio from '../app/assets/img/Web Portfolio.jpg';
import './ProjectPage.css';

const ProjectPage = () => {
    return (
        <Container style={{ textAlign: "center"}}>
            <h3 id='title'> Projects </h3>
            <Row style={{ paddingBottom: 100 }}>
                <Col sm='6' md='4' className="mx-auto img-fluid">
                    <Card>
                        <CardHeader><h3>Passage App</h3></CardHeader>
                        <a href="/passage-app"> {/* Replace "/passage-app" with the actual link */}
                            <CardBody style={{ height: '400px' }}>
                                <img src={PassagePic} alt='filler' style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover'
                                }} />
                            </CardBody>
                        </a>
                    </Card>
                </Col>
                <Col sm='6' md='4' className="mx-auto img-fluid">
                    <Card>
                        <CardHeader><h3>Meek & Lowly</h3></CardHeader>
                        <a href="http://meek-and-lowly.web.app"> {/* Replace "/meek-lowly" with the actual link */}
                            <CardBody style={{ height: '400px' }}>
                                <img src={MeekndLowlyPic} alt='filler' style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover'
                                }} />
                            </CardBody>
                        </a>
                    </Card>
                </Col>
                <Col sm='6' md='4' className="mx-auto img-fluid">
                    <Card>
                        <CardHeader><h3>This Website!</h3></CardHeader>
                        <a href="https://jarrett-roster-portfolio.web.app/"> {/* Replace "/this-website" with the actual link */}
                            <CardBody style={{ height: '400px' }}>
                                <img src={WebsitePortfolio} alt='filler' style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover'
                                }} />
                            </CardBody>
                        </a>
                    </Card>
                </Col>
            </Row> 
        </Container>
    )
};

export default ProjectPage;