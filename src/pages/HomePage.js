import { Container, Row, Col } from "reactstrap";
import ProfilePic from '../app/assets/img/ProfilePic.png'



const HomePage = () => {
    return (
        <Container>
            <Row className="row-content">
                <Col sm='7'>
                    <h3>About Me</h3>
                    <p>
                        I'm a Junior Software Developer based out of Denver, CO. 
                    </p>
                    <p>
                        Test
                    </p>
                </Col>
                <Col>
                    <img src={ProfilePic} alt='profile pic' style={{ width: '300px', height: '300px', padding: 0}}/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;