import React from 'react';
import Me from '../../../images/cvpics.png'
import './About.css'

const About = () => {
    return (
        <div className='container mx-auto' >
            {/* from daisy ui */}
           <div className="hero px-3 shadow-xl bg-base-100">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <img src={Me} className="max-w-sm rounded-lg " />
                    <div>
                    <h1 className="text-2xl font-bold">Md. Abdur Rashid</h1>
                    <p className="py-6 pStyle">
                        Motivated to use my skills in web application development. Proficient in MongoDB, Express.js,React, and Node.js, seeking an opportunity to contribute innovative coding skills and collaborative expertise to a development team.
                        </p>
                    <button className="btn btn-primary">Download My Resume </button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default About;