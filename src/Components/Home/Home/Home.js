import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import WhatIdo from '../WhatIdo/WhatIdo';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='container mx-auto' >
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <WhatIdo></WhatIdo>
            <Projects></Projects>
        </div>
    );
};

export default Home;