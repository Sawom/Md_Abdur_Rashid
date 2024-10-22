import React from 'react';
import { FaDownload, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Me from '../../../images/cvpics.png';
import './About.css';

const About = () => {
    const [text] = useTypewriter({
        words: [ "'m a Full Stack Web Developer.", "work with MERN stack.", "'m a Web Designer."],
        loop: {}
    })
    return (
        <div className='servicebackground'>
            <div className='container  mx-auto' id='about' >
            {/* from daisy ui */}
           <div className="hero px-3 py-3">
                <div className="hero-content  flex-col lg:flex-row md:flex-row">
                    <div style={{width: '50%'}} >
                        <img alt='my pics' src={Me} className="max-w-full h-auto rounded-lg " />
                    </div>
                    <div style={{width: '50%'}} >
                    <h1 className="text-2xl font-bold">Md. Abdur Rashid</h1>
                    {/* auto typing text */}
                    <p className='font-bold text-xl' style={{color: '#000080'}} >  <span className='mx-1'>I</span>
                        <span style={{ fontWeight: 'bold'}} >
                            {text}
                        </span>
                        <Cursor></Cursor>
                    </p>
                    <p className="p-4 roboto">
                        Motivated to use my skills in web application development. Proficient in MongoDB, Express.js,React, and Node.js, seeking an opportunity to contribute innovative coding skills and collaborative expertise to a development team.
                    </p>
                    <a href="https://drive.google.com/drive/folders/1tE9W_kbBbnvHOnLUQ4y4ZC0OFJYQiAWr?usp=sharing"  target="_blank">
                        <button className="btn btn-outline btn-sm border-4 mt-6"> <span className='flex px-2'> <FaDownload className='mr-2' /> My Resume/CV </span>  </button>
                    </a>
                    {/* social button */}
                    <p className='mt-4 roboto' >Available for contact. Email: asawom250@gmail.com</p>
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
        </div>
    );
};

export default About;