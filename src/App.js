import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import Sunset from '../src/app/assets/img/Sunset.jpg';
import { useSpring, animated} from 'react-spring';
import CursorTracer from './components/CursorTracer';

function App() {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'translateY(0%)' : 'translateY(-100%)',
        config: { duration: 850 }
      });

    useEffect(() => {
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
            <animated.div style={animatedStyle}>
                <Header />
            </animated.div>
            <Routes>
                <Route path='/' element={<HomePage />} /> 
                <Route path='about' element={<AboutPage />} />
                <Route path='projects' element={<ProjectPage />} /> 
                <Route path='blog' element={<BlogPage />} /> 
                <Route path='contact' element={<ContactPage />} />
            </Routes>
            <CursorTracer />
            <Footer />
        </div>
    );
}
export default App;