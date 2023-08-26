import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='project' className='container mt-10 mx-auto' >
            <p className='text-center font-bold text-2xl' > Projects </p>
            <div className=' bg-base-100 ' >
                     {/* 1st */}
                <div className='navbar container mx-auto' >
                    {/* 2nd  */}
                    <div className="navbar-center text-center flex">
                        <ul className="menu navbar-center px-1">
                            <div className='mx-auto navbar-center flex px-3'>
                                <li > <Link to='/mern'  > <span className='linkStyle' >MERN </span>  </Link> </li>
                                <li> <Link to='/reactjs'  > <span className='linkStyle' > React </span>  </Link> </li>
                                <li> <Link to='/psd'  > <span className='linkStyle' > PSD to HTML </span>  </Link> </li>
                                <li> <Link to='/academic'  > <span className='linkStyle' > Academic </span>  </Link> </li>
                            </div>
                        </ul>
                    </div>
                </div>      
            
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Projects;