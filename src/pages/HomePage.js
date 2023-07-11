import { Container, Row, Col } from "reactstrap";
import ProfilePic from '../app/assets/img/ProfilePic.png'


const HomePage = () => {
    return (
        <Container style={styles.container}>
            <Row className="row-content text-white mx-auto" style={{ margin: 10, alignItems: 'center' }}>
                <Col sm={12} md={8} className="px-0">
                    <h3 style={{ paddingTop: 50 }}>
                        I'm a Junior Software Developer out of Denver, CO.
                    </h3>
                    <p>
                        Experienced web developer with a passion for creating engaging and user-friendly websites. 
                        Skilled in front-end and back-end development, 
                        I strive to deliver innovative solutions that combine my technical expertise with a keen eye for design. 
                        With a background in music production and graphic design, I bring a unique perspective to my work, 
                        infusing creativity and aesthetic appeal into every project. 
                        Committed to excellence and guided by my faith, I approach each challenge with dedication, integrity, 
                        and a drive to exceed expectations.
                    </p>
                </Col>
                <Col style={{ overflow: 'hidden', padding: 40 }}>
                    <img 
                    src={ProfilePic} 
                    alt='profile pic' 
                    style={{ 
                        width: '250px', 
                        height: '250px', 
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

const styles = {
    container: {
      borderRadius: 10,
      backgroundColor: '#ffa60275',
      padding: 10,
      overflow: 'hidden',
      width: '95%',
      maxWidth: '95%',
      margin: 20
    },
    box: {
      backgroundColor: '#00686f',
      borderRadius: 10,
      margin: 0,
      padding: 10,
    },
  };

export default HomePage;