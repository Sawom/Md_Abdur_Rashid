import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import WhatIdo from '../WhatIdo/WhatIdo';
import Projects from '../Projects/Projects';
import Extracurricular from '../../Extracurricular/Extracurricular';

const Home = () => {
    return (
        <div className='mx-auto' >
            <About></About>
            <WhatIdo></WhatIdo>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Extracurricular></Extracurricular>
        </div>
    );
};

export default Home;