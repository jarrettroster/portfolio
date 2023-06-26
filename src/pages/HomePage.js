import { Container, Row, Col } from "reactstrap";
import ProfilePic from '../app/assets/img/ProfilePic.png'


const HomePage = () => {
    return (
        <Container>
            <Row className="row-content, text-white">
                <Col sm='7'>
                    <h3 style={{ paddingTop: 50, paddingBottom: 5 }}>
                        I'm a Junior Software Developer out of Denver, CO.
                    </h3>
                    <p>
                        Recently graduated from Nucamp Coding Bootcamp's Full Stack Development program.
                    </p>
                </Col>
                <Col style={{ overflow: 'hidden', padding: 40 }}>
                    <img 
                    src={ProfilePic} 
                    alt='profile pic' 
                    style={{ 
                        width: '300px', 
                        height: '300px', 
                        padding: 0,
                        borderRadius: '50%',
                        boxShadow: '0 20px 20px rgba(0, 0, 0, 0.50)',
                        overflow: 'hidden',
                    }}/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;