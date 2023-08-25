import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import WhatIdo from '../WhatIdo/WhatIdo';

const Home = () => {
    return (
        <div className='container mx-auto' >
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <WhatIdo></WhatIdo>
        </div>
    );
};

export default Home;