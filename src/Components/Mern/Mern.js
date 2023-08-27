import React from 'react';
import mern1 from '../../images/mern/arsTravels/mern1.png';
import mern2 from '../../images/mern/arsTravels/mern2.png';
import mern3 from '../../images/mern/arsTravels/mern3.png';
import mern4 from '../../images/mern/arsTravels/mern4.png';
import mern5 from '../../images/mern/arsTravels/mern5.png';
import mern6 from '../../images/mern/arsTravels/mern6.png';
import { AiOutlineFundView } from 'react-icons/ai';


const Mern = () => {
    return (
        <div className='mx-auto container' >
                {/* element */}
                <div className='grid lg:grid-cols-2 gap-8  md:grid-cols-2' >
                    {/* 1st part */}
                    <div >
                        <div className="card bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure> 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide1" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern1} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle">❮</a> 
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide2" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern2} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a> 
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide3" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern3} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a> 
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">ARS-Travels</h2>
                                <div className="card-actions justify-end">
                                    <a href="https://toursite-44305.web.app/"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd part*/}
                    <div  >
                        <div className="card  bg-base-100 shadow-2xl">
                            {/* figure er jaygay carousel use korchi */}
                            <figure > 
                                <div className="carousel w-full">
                                    {/* 1st slide */}
                                    <div id="slide4" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern4} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide6" className="btn btn-circle">❮</a> 
                                        <a href="#slide5" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 2nd slide */}
                                    <div id="slide5" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern5} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a> 
                                        <a href="#slide6" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                    {/* 3rd slide */}
                                    <div id="slide6" className="carousel-item relative w-full">
                                        <img alt='projectImage' src={mern6} className="w-full" />
                                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle">❮</a> 
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                        </div>
                                    </div> 
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Planet-Shopping</h2>
                                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                <div className="card-actions justify-end">
                                    <a href="https://ecommerceapp-f7c88.web.app/"  target="_blank" >
                                        <button className="btn btn-outline btn-sm border-4 mt-6">
                                            <span className='flex px-2'><AiOutlineFundView className='mr-2' size={16} /> view  </span> 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
        </div>
    );
};

export default Mern;