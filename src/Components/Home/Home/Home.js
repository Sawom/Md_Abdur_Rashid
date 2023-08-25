import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div className='container mx-auto' >
            <About></About>
            <Education></Education>
        </div>
    );
};

export default Home;