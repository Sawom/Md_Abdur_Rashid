import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='container mx-auto' >
            <About></About>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default Home;