import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './Header.css';


const Header = () => {
    return (
         <div className=' bg-base-200 shadow-md sticky top-0 z-50' > 
                <div className='navbar container mx-auto' >
                    {/* 1st */}
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* responsive menu part */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <HashLink to='#about' smooth > <span className='linkStyle' > About </span>  </HashLink> </li>
                            <li> <HashLink to='#education' smooth > <span className='linkStyle' > Education </span>  </HashLink> </li>
                            <li> <HashLink to='#skill' smooth > <span className='linkStyle' > Skills </span>  </HashLink> </li>
                            <li> <HashLink to='#todo' smooth > <span className='linkStyle' > Service </span>  </HashLink> </li>
                            <li> <HashLink to='#project' smooth > <span className='linkStyle' > Project </span>  </HashLink> </li>
                            <li> <HashLink to='#ext' smooth > <span className='linkStyle' > Extracurricular </span>  </HashLink> </li>
                        </ul>
                        </div>
                        <p className=" normal-case font-bold text-xl">Md. Abdur Rashid</p>
                    </div>
                    {/* 2nd  */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li> <HashLink to='#about' smooth > <span className='linkStyle' > About </span>  </HashLink> </li>
                            <li> <HashLink to='#education' smooth > <span className='linkStyle' > Education </span>  </HashLink> </li>
                            <li> <HashLink to='#skill' smooth > <span className='linkStyle' > Skills </span>  </HashLink> </li>
                            <li> <HashLink to='#todo' smooth > <span className='linkStyle' > Service </span>  </HashLink> </li>
                            <li> <HashLink to='#project' smooth > <span className='linkStyle' > Project </span>  </HashLink> </li>
                            <li> <HashLink to='#ext' smooth > <span className='linkStyle' > Extracurricular </span>  </HashLink> </li>
                        </ul>
                    </div>
                    <div className='navbar-end'>
                        <a href="https://github.com/Sawom" target="_blank">
                             <button className='btn btn-ghost ' > <FaGithub/> gitHub</button>
                        </a>
                    </div>
                </div>      
        </div>
    );
};

export default Header;