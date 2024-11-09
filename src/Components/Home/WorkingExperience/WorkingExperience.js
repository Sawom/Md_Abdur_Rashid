import React from 'react';
import Mywork from '../../../images/desk.jpeg';

const WorkingExperience = () => {
    return (
        <div  className='px-3 my-5 container mx-auto'>
            <h1 className='text-center text-2xl font-bold'>Working Experience</h1>
            {/* 1st work */}
            <div className='my-8 px-3 grid lg:grid-cols-2 gap-5  md:grid-cols-2 grid-cols-1 '>
                {/* 1st div */}
                <div>
                    <img src={Mywork} style={{width: "80%"}} alt="" />
                </div>
                {/* 2nd div */}
                <div>
                    <h1  className="text-2xl font-bold">Dnet</h1> 
                    <h1 className="text-xl font-semibold">Junior Web Developer (Frontend)</h1>
                    <br />
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>
                            Front-end Design & Development with HTML, CSS, JS, Bootstrap, Tailwind-CSS, React.
                        </li>
                        <li>
                            Figma to web design. Website Bug Solve, Update previous project.
                        </li>
                    </ul>
                </div>
            </div>

            {/* 2nd work */}
            <div className='my-8 px-3 grid lg:grid-cols-2 gap-5  md:grid-cols-2 grid-cols-1 '>
                {/* 1st div */}
                <div>
                    <h1  className="text-2xl font-bold">FIFOTech</h1> 
                    <h1 className="text-xl font-semibold">Intern Web Developer</h1>
                    <br />
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>
                            Experienced in how IT works in the BPO industry. 
                        </li>
                        <li>
                            Contributed to web design and development.
                        </li>
                    </ul>
                </div>
                {/* 2nd div */}
                <div>
                    <img src={Mywork} style={{width: "80%"}} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default WorkingExperience;