import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='project' className='container mt-10 mx-auto' >
            <p className='text-center font-bold text-2xl' > Projects </p>
            {/* nav */}
            <div className='navbar container mx-auto' >
                    {/* 1st */}
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* responsive menu part */}
                        {/* nested route */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li > <Link to=''  > <span className='linkStyle' >MERN </span>  </Link> </li>
                            <li> <Link to='/reactjs'  > <span className='linkStyle' > React </span>  </Link> </li>
                            <li> <Link to='/psd'  > <span className='linkStyle' > PSD to HTML </span>  </Link> </li>
                            <li> <Link to='/academic'  > <span className='linkStyle' > Academic </span>  </Link> </li>
                        </ul>
                        </div>
                        <p className=" normal-case font-bold text-2xl"></p>
                    </div>
                    {/* 2nd  */}
                    <div className="navbar-center hidden md:flex lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li > <Link to=''  > <span className='linkStyle' >MERN </span>  </Link> </li>
                            <li> <Link to='/reactjs'  > <span className='linkStyle' > React </span>  </Link> </li>
                            <li> <Link to='/psd'  > <span className='linkStyle' > PSD to HTML </span>  </Link> </li>
                            <li> <Link to='/academic'  > <span className='linkStyle' > Academic </span>  </Link> </li>
                        </ul>
                    </div>
                </div>  
            <Outlet></Outlet>
        </div>
    );
};

export default Projects;