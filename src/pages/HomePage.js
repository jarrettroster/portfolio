import { Container, Row, Col } from "reactstrap";
import ProfilePic from '../app/assets/img/ProfilePic.png';
import ProjectPage from './ProjectPage';

const HomePage = () => {
    return (
        <div>
            <Container id ='cardStyle' style={styles.container}>
                <Row className="row-content text-white mx-auto" style={{ margin: 10, alignItems: 'center' }}>
                    <Col sm={12} md={6} className="px-0">
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
                    <Col sm={12} md={6} className="d-flex justify-content-center align-items-center">
                        <img 
                            src={ProfilePic} 
                            alt='profile pic' 
                            style={{ 
                                width: '250px', 
                                height: '250px', 
                                padding: 0,
                                borderRadius: '50%',
                                boxShadow: '0 20px 20px rgba(0, 0, 0, 0.50)'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
                <ProjectPage />
            </Container>
            <Container id ='cardStyle' style={styles.container2}>
                <div className="text-center">
                    <a
                        className='btn btn-social-icon btn-lg btn-linkedin'
                        href='http://www.linkedin.com/in/jarrett-roster-459985268/'
                    >
                        <i className='fa fa-linkedin' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-lg btn-github'
                        href='http://github.com/jarrettroster/'
                    >
                        <i className='fa fa-github' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-lg btn-twitter'
                        href='http://twitter.com/'
                    >
                        <i className='fa fa-twitter' />
                    </a>{' '}
                    <a
                        className='btn btn-social-icon btn-lg btn-google'
                        href='http://youtube.com/'
                    >
                        <i className='fa fa-youtube' />
                    </a>
                    </div>
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
        margin: '20px auto',
        border: '1px solid white' 
    },
    container2: {
        borderRadius: 50,
        backgroundColor: '#E8A87C',
        padding: 10,
        width: '45%',
        maxWidth: '94%',
        margin: '5px auto',
        border: '1px solid white' 
    }
};

export default HomePage;
