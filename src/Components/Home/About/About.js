import React, { useCallback } from 'react';
import Me from '../../../images/cvpics.png'
import './About.css';
import { FaDownload, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const About = () => {
    return (
        <div className='container mx-auto' id='about' >
            {/* from daisy ui */}
           <div className="hero px-3 shadow-xl bg-base-100">
                <div className="hero-content  flex-col lg:flex-row md:flex-row">
                    <div style={{width: '50%'}} >
                        <img alt='my pics' src={Me} className="max-w-full h-auto rounded-lg " />
                    </div>
                    <div style={{width: '50%'}} >
                    <h1 className="text-2xl font-bold">Md. Abdur Rashid</h1>
                    <p className="p-4 pStyle roboto">
                        Motivated to use my skills in web application development. Proficient in MongoDB, Express.js,React, and Node.js, seeking an opportunity to contribute innovative coding skills and collaborative expertise to a development team.
                    </p>
                    <a href="https://drive.google.com/file/d/1BOqyJXLIrHlbN4E5GqkbgsRVEa8ivDqO/view?usp=sharing"  target="_blank">
                        <button className="btn btn-outline btn-sm border-4 mt-6"> <span className='flex px-2'> <FaDownload className='mr-2' /> My Resume </span>  </button>
                    </a>
                    {/* social button */}
                    <p className='mt-4 roboto' >Available for contact</p>
                    <div >
                        <a href="https://www.facebook.com/profile.php?id=100008733311858&mibextid=ZbWKwL" target="_blank" >
                            <button className="btn rounded-full btn-outline mr-4 mt-4" > <FaFacebookF size={15} /> </button>
                        </a>
                        <a href="https://www.linkedin.com/in/abdur-rashid-sawom-3379a0262" target="_blank" >
                            <button className="btn rounded-full btn-outline mr-4 mt-4" > <FaLinkedinIn size={16} /> </button>
                        </a>
                    </div>
                    
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default About;