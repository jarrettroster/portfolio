import { Container, Row, Col } from "reactstrap";
import ProfilePic from '../app/assets/img/ProfilePic.png'


const HomePage = () => {
    return (
        <div>
            <Container id ='cardStyle' style={styles.container}>
                <Row className="row-content text-white mx-auto" style={{ margin: 10, alignItems: 'center' }}>
                    <Col sm={12} md={8} className="px-0 mx-auto">
                        <h3 style={{ padding: 40,  paddingLeft: 0, paddingBottom: 0 }}>
                            Hi! My name is
                        </h3>
                        <div id="nameStyle">
                        Jarrett Roster
                        </div>
                        <h5>
                        I'm a passionate Full Stack Web and Mobile Developer, combining technical expertise with a creative touch. 
                        Committed to excellence, driven by faith, and dedicated to exceeding expectations. 
                        Bringing a unique perspective with a background in music production and graphic design.
                        </h5>
                    </Col>
                    <Col style={{ padding: 40 }}>
                        <img 
                        src={ProfilePic} 
                        alt='profile pic' 
                        style={{ 
                            width: '250px', 
                            height: '250px', 
                            padding: 0,
                            borderRadius: '50%',
                            boxShadow: '0 20px 20px rgba(0, 0, 0, 0.50)'
                        }}/>
                    </Col>
                </Row>
            </Container>
            <Container id ='cardStyle' style={styles.container}>
                <Row className="row-content text-white mx-auto" style={{ margin: 10, alignItems: 'center' }}>
                    <Col sm={12} md={8} className="px-0">
                        <h3 style={{ paddingTop: 50 }}>
                            
                        </h3>
                    </Col>
                </Row>
            </Container>
        </div>
    
    );
};

const styles = {
    container: {
      borderRadius: 10,
      backgroundColor: '#E8A87C',
      padding: 20,
      width: '94%',
      maxWidth: '94%',
      margin: 40
    },
    box: {
      backgroundColor: '#00686f',
      borderRadius: 10,
      margin: 0,
      padding: 40,
    },
  };

export default HomePage;