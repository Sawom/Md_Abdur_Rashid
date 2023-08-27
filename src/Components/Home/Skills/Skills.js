import React from 'react';
import {FaJava, FaCss3Alt,FaHtml5,FaBootstrap,FaPython, FaReact,FaNodeJs } from 'react-icons/fa';
import {BiLogoTailwindCss, BiLogoMongodb} from 'react-icons/bi';
import {SiDaisyui, SiExpress,SiJavascript, SiMysql} from 'react-icons/si';
import {DiJavascript1}  from 'react-icons/di';
import {TbBrandCpp} from 'react-icons/tb';
import './skills.css';

const Skills = () => {
    return (
        <div className='mt-10 container mx-auto' id='skills'>
            <p className='text-center font-bold text-2xl' > Skills </p>
            <div className='grid lg:grid-cols-3 gap-8  md:grid-cols-3' >
                {/* 1st */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Front-end</h2>
                        {/* icons */}
                        <div className="wAuto" >
                            <di className='flex mt-5'>
                                <FaCss3Alt className='mr-5' size={40} color='blue' />
                                <FaHtml5 className='mr-5' color='#E94B27' size={40} />
                                <FaBootstrap size={40} color='#7F11F9' />
                            </di>
                            <di className='flex mt-10' >
                                <BiLogoTailwindCss className='mr-5' color='#38BDF8' size={40} />
                                <SiDaisyui className='mr-5' color='#1AD1A5' size={50} />
                                <FaReact  size={40} color='#087EA4'  />
                            </di>
                        </div>
                        {/* icon div end */}
                    </div>
                </div>
                {/* 2nd */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Back-end</h2>
                        {/* icons */}
                        <div className='wAuto'>
                            <div className='flex mt-5'>
                                <span className='flex mr-6'   style={{fontSize: '30px'}}  > <SiExpress color='#00758F' /><DiJavascript1  color='#00758F' /> </span> 
                                <FaNodeJs size={40} color='green' />
                            </div>
                            <div className='flex mt-10' >
                                <BiLogoMongodb className='mr-8' size={40} color='green' />
                                <SiMysql color='#00758F' size={55}  />
                            </div>
                        </div>
                        {/* icon div end */}
                    </div>
                </div>
                {/* 3rd */}
                <div className="card bg-base-100 ">
                    <div className="card-body">
                        <h2 className="card-title">Programming Languages</h2>
                        {/* icons */}
                        <div className='wAuto' >
                            <div className='flex mt-5' >
                                <FaPython className='mr-5' color='#3E7CAE' size={40} />
                                <SiJavascript className='mr-5' size={35} color='#E94B27' />
                                <FaJava color='#3E7CAE' size={40} />
                            </div>
                            <div className='flex mt-10' >
                                <TbBrandCpp className='mr-8' color='#00549D' size={40} />
                                <p style={{fontSize: '30px', color:'#00549D'}} className='font-bold' >C</p>
                            </div>
                        </div>
                         {/* icon div end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;