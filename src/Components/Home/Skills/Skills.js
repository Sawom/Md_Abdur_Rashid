import React from 'react';

const Skills = () => {
    return (
        <div className=' shadow-2xl mt-8 container mx-auto' id='skill' >
            <p className='text-center font-bold text-2xl' > Skills </p>
            <div className="hero  px-3">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    {/* 1st */}
                    <div style={{width: '50%'}} >
                    I am a MERN stack developer. Also Work with web design and development. Besides these I have other skills. 
                    </div>
                    {/* 2nd table section*/}
                    <div style={{width: '50%'}} >
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="hover">
                                        <td>Programming Language</td>
                                        <td>C, Cpp, Java, Python , JavaScript</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="hover">
                                        <td>Database</td>
                                        <td>MySQL, MongoDB</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="hover">
                                        <td>CSS Framework</td>
                                        <td>Bootstrap, Tailwind, Material-UI</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="hover">
                                        <td>Frontend Framework</td>
                                        <td>React with React-Bootstrap, React-Tailwind, React-Material-UI</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className="hover">
                                        <td>Backend</td>
                                        <td>Node js, ExpressJS, Django</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;