import { Col, Container, Card, CardBody, CardHeader } from "reactstrap";
import esvPic from '../app/assets/img/esv.png'

const ProjectPage = () => {
    return (
        <Container style={{ textAlign: "center"}}>
            <h3 id='title'> Projects </h3>
            <Col sm='6' md='4' className="mx-auto img-fluid">
                <Card>
                    <CardHeader><h3>Passage App</h3></CardHeader>
                    <CardBody style={{ 
                        }}>
                        <img src={esvPic} alt='filler' style={{ 
                            width: '200px', 
                            height: '200px', 
                            padding: 0
                            }} ></img>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    )
};

export default ProjectPage;