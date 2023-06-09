import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import Sunset from '../src/app/assets/img/Sunset.jpg';
import { useSpring, animated} from 'react-spring';



function App() {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,1)',
        config: { duration: 850 }
    });

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());  
        dispatch(fetchComments());  
        setToggle(true);
    }, [dispatch]);


    return (
            <div className="App" style={{
                backgroundImage:`url(${Sunset})`,
                backgroundSize: 'cover'
                }}>
            <animated.div style={springs}>
                <Header />
            </animated.div>
            <Routes>
                <Route path='/' element={<HomePage />} /> 
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} /> 
                <Route 
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>
            <AboutPage />
            <ContactPage />
            <Footer />
        </div>
    );
}
}
export default App;